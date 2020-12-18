// Importo l'installazione di jquery
const $ = require( "jquery" );

$(document).ready(function() {


    // TEMPLATE CARD ------------------------
    // Inizializzo i passaggi handlebars
    // dove si trova il template nel mio file html
    const sorgente = $("#card-template").html();
    // dico a handlebars di compilare il sorgente
    const template = Handlebars.compile(sorgente);

    // TEMPLATE SELECT ------------------------
    // Inizializzo i passaggi handlebars
    // dove si trova il template nel mio file html
    const sorgente_select = $("#select-template").html();
    // dico a handlebars di compilare il sorgente
    const template_select = Handlebars.compile(sorgente_select);


    // Versione ajax
    if ($("#versione-ajax").length) {

        // Faccio la chiamata ajax
        $.ajax({

            // Il server che verrà chiamato
            url: "../dischi.php",
            // Metodo richiesta
            method: "GET",
            // Chiamata a buon fine
            success: function(data){

                // Creo un array per i generi
                var genres = [];

                // Ciclo l'array che mi viene fornito dalla chiamata ajax
                for (var i = 0; i < data.length; i++) {

                    // Salvo i dati ciclati
                    var risultati = {
                        "poster": data[i].poster,
                        "title": data[i].title,
                        "author": data[i].author,
                        "year": data[i].year
                    };

                    // Salvo i dati ciclati in una variabile
                    var stampoRisultati = template(risultati);
                    // Stampo in pagina i dati ricavati
                    $(".container").append(stampoRisultati);

                    // Quando ciclo recupero il genere del disco corrente
                    var current_genre = data[i].genre;
                    // Verifico se questo il genere corrente esiste già nell'array creato prima
                    if(!genres.includes(current_genre)) {
                        // Se non esiste faccio push
                        genres.push(current_genre);
                    }
                }

                // Ciclo l'array generi
                for (var i = 0; i < genres.length; i++) {

                    var genere = {
                        "genre": genres[i]
                    };

                    // Salvo i dati ciclati in una variabile
                    var stampogeneri = template_select(genere);
                    // Stampo in pagina i dati ricavati
                    $(".tendina").append(stampogeneri);

                    // Versione con template literal
                    // // Stampo ogni genere con il suo tag nel html
                    // $(".tendina").append(`
                    //     <option value="${genres[i]}">
                    //         ${genres[i]}
                    //     </option>`);
                }
            },
            // In caso la chiamata ajax non vada a buon fine
            error: function(){
                console.log("errore");
            }
        });
    }

    // Intercetto i cambiamenti nella select
    $(".tendina").change(function() {

        // Svuoto il contenitore per far spazio ai nuovi dati
        $(".container").empty();

        // Salvo il valore del genere selezionato in una variabile
        var selected_genre = $(this).val();

        // Faccio una chiamata ajax inviando al server il genere selezionato
        $.ajax({
            // Il server che verrà chiamato
            url: "../dischi.php",
            // Metodo richiesta
            method: "GET",
            // Inserisco la query string che comunicherà con il file php
            data: {
                // Qui inserisco il valore selezionato della select
                genre: selected_genre
            },
            // Chiamata a buon fine
            success: function(data) {

                // Ciclo l'array che mi viene fornito dalla chiamata ajax (viene già filtrato)
                for (var i = 0; i < data.length; i++) {

                    var context = {
                        "poster": data[i].poster,
                        "title": data[i].title,
                        "author": data[i].author,
                        "year": data[i].year
                    };


                    var html = template(context);
                    $(".container").append(html);
                }
            },
            error: function() {
                console.log("errore");
            }
        });
    });


    // // Filtro lato client
    // $('.tendina').on('change', function() {
    //
    //   var genereDaRicercare = this.value;
    //
    //   console.log('genere', genereDaRicercare);
    //
    //     // chiamata ajax
    //     $.ajax({
    //
    //         // Il server che verrà chiamato
    //         url: "vers-ajax/../dischi.php",
    //         // passiamo su query st ring il filtro
    //         // Metodo richiesta
    //         method: "GET",
    //         // Chiamata a buon fine
    //         success: function(data){
    //
    //             // Svuoto il container
    //             $(".container").empty();
    //
    //             // Ciclo l'array che mi viene fornito dalla chiamata ajax
    //             for (var i = 0; i < data.length; i++) {
    //
    //                 if (genereDaRicercare == '' || data[i].genre.toLowerCase() == genereDaRicercare.toLowerCase()) {
    //
    //                     // Salvo i dati ciclati
    //                     var risultatiFiltrati = {
    //                         "poster": data[i].poster,
    //                         "title": data[i].title,
    //                         "author": data[i].author,
    //                         "year": data[i].year
    //                     };
    //                     // Salvo i dati ciclati in una variabile
    //                     var stampoRisultatiFiltrati = template(risultatiFiltrati);
    //                     // Stampo in pagina i dati ricavati$
    //                     $(".container").append(stampoRisultatiFiltrati);
    //                 }
    //
    //             }
    //
    //         },
    //         // In caso la chiamata ajax non vada a buon fine
    //         error: function(){
    //             console.log("errore");
    //         }
    //     });
    //
    // });

});
