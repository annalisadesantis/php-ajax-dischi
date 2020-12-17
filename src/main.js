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
        // Chaiamata a buon fine
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
    // chiamata ajax
    $.ajax({

        // Il server che verrà chiamato
        url: "vers-ajax/../dischi.php",
        // Metodo richiesta
        method: "GET",
        // Chaiamata a buon fine
        success: function(data){



            // Ciclo l'array che mi viene fornito dalla chiamata ajax
            for (var i = 0; i < data.length; i++) {

                var generi = [];

                if (!generi.includes(data[i].genre)) {
                    generi.push(data[i].genre);
                }

                console.log(generi);



            }
        },
        // In caso la chiamata ajax non vada a buon fine
        error: function(){
            console.log("errore");
        }
    });
});
