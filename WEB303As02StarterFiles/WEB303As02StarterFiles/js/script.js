// WEB303 Assignment 2
// Ajima Master

//when click on three link add correct code using AJAX
$('document').ready(function(){
    $('#prospect').click(function(){
        $('#content').load('prospect.html');
    });


    //
    $("#prospect").click(function(){
        $("div").animate({left: '250px'});
      }); 
    // Issue a Http GET request for the contents of the specified Url.
// when the response arrives successfully, verify it's plain text
// and if so, pass it to the specified callback function
function getText(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        // if the request is complete and was successful -
        if (request.readyState === 4 && request.status === 200) {
            // check the content type:
            var type = request.getResponseHeader("Content-Type");
            if (type.match(/^text/)) {
                callback(request.responseText);
            }
        }
    };
    $("#prospect").click(function(){
        $("#prospect").hide();
      });
      
      $("#show").click(function(){
        $("p").show();
      });
    // send it:
    request.send(null); // nothing to send on GET requests.
}

    $('#convert').click(function(){
        $('#solution').load('convert.html');
    });
    $('#retain').click(function(){
        $('#solution').load('retain.html');
    });
    
/*$('#/content-wrapper').click(function(){
    //INSTANCE OF OBJECT  TO INVOKE THE CONSTRUCTOR
    let xhr=new XMLHttpRequest();
    //prepare the request by server or browser to load the request
    xhr.open('GET','test.json',true);
    xhr.send('content');
    //add the correct the content
    $('#content').append(<li></li>);



});*/
});
