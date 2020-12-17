// Importo l'installazione di jquery
const $ = require( "jquery" );

$(document).ready(function() {

    // Inizializzo i passaggi handlebars
    // dove si trova il template nel mio file html
    const sorgente = $("#card-template").html();
    // dico a handlebars di compilare il sorgente
    const template = Handlebars.compile(sorgente);

    // chiamata ajax
    $.ajax({

        // Il server che verrà chiamato
        url: "vers-ajax/../dischi.php",
        // Metodo richiesta
        method: "GET",
        // Chiamata a buon fine
        success: function(data){

            console.log(data);

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
            }
        },
        // In caso la chiamata ajax non vada a buon fine
        error: function(){
            console.log("errore");
        }
    });

    // Filtro lato client
    $('.tendina').on('change', function() {

      var genereDaRicercare = this.value;

      console.log('genere', genereDaRicercare);

        // chiamata ajax
        $.ajax({

            // Il server che verrà chiamato
            url: "vers-ajax/../dischi.php",
            // passiamo su query st ring il filtro
            // Metodo richiesta
            method: "GET",
            // Chiamata a buon fine
            success: function(data){

                // Svuoto il container
                $(".container").empty();

                // Ciclo l'array che mi viene fornito dalla chiamata ajax
                for (var i = 0; i < data.length; i++) {

                    if (genereDaRicercare == '' || data[i].genre.toLowerCase() == genereDaRicercare.toLowerCase()) {

                        // Salvo i dati ciclati
                        var risultatiFiltrati = {
                            "poster": data[i].poster,
                            "title": data[i].title,
                            "author": data[i].author,
                            "year": data[i].year
                        };
                        // Salvo i dati ciclati in una variabile
                        var stampoRisultatiFiltrati = template(risultatiFiltrati);
                        // Stampo in pagina i dati ricavati$
                        $(".container").append(stampoRisultatiFiltrati);
                    }

                }

            },
            // In caso la chiamata ajax non vada a buon fine
            error: function(){
                console.log("errore");
            }
        });

    });

});
