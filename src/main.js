const $ = require( "jquery" );

$(document).ready(function() {

    const sorgente = $("#card-template").html();
    const template = Handlebars.compile(sorgente);

    $.ajax({

        url: "vers-ajax/../dischi.php",
        method: "GET",
        success: function(data){

            console.log(data);

            for (var i = 0; i < data.length; i++) {

                var risultati = {
                    "poster": data[i].poster,
                    "title": data[i].title,
                    "author": data[i].author,
                    "year": data[i].year
                };

                var stampoRisultati = template(risultati);
                $(".container").append(stampoRisultati);
            }
        },
        error: function(){
            console.log("errore");
        }
    });
});
