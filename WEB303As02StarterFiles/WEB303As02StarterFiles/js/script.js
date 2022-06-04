// WEB303 Assignment 2
// Ajima Master

//when click on three link add correct code using AJAX
$('document').ready(function(){
    $('#prospect').click(function(){
        $('#content').load('prospect.html');
    });
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
