// WEB303 Assignment 3
// Ajima Master
('document').ready(function(){
    //make ajax call after few second
    setTimeout(loadJson,5000);

    $('#glitch-team').html();
    //TO RETRIVE JSON CONTENT FROM SERVER
    $.getJSON("data/glitchTeam.json",function(){
        //array that initialize object
        var item=[];
        //each method to iterate through each member of object
        $.each(data.greetTeam,function(key,val){
            item.append("<li id='" + key + "'>" + val + "</li>");
            item='<h4>' +val.fullname+'</h4>';
            item='<h6>' +val.position+ '</h6>';
            item='<p>'+val.shortbio+'</p>'

        });
        $('#glitch-team').html(item);

    });
    //function loadJson(){
        //retrive content of json
        //ajax method to retrive data from glitchTeam
        /*$.ajax({
            type: 'GET',
            url: 'glitchTeam.json',
            dataType: 'json',
            sucess:function(){
                $.each(data.greetTeam,function(key,val){
                    let temp='';
                    temp='<h4>' +val.fullname+'</h4>';
                    temp='<h6>' +val.position+'</h6>';
                    temp='<p>' +val.position+'</p>';
                 });
                 $('div#glitch-team').html(temp);
                
                    
                 },
                 error:function(){
                    $('div#glitch-team').text('content could not be retrived');
                 }
                });
                
            
            }*/
            setTimeout(beforeSend,6000)
            function beforeSend(){
                var glitchteam=document.getElementById('#glitch-team');
                $.ajax({
                    type:'GET',
                    url:'glitchTeam.json',
                    async:'true',
                    data:{glitchteam:glitchteam},
                    sucess:function(){
                        document.getElementById('#glitch-team').innerHTML='loading';
                    },
                    error:function(){
                        $('div#glitch-team').text('content could not be retrived');
                     }.done(function(){
                        item.forEach(items => {'<h4>'+items.fullname+ '</h4>',
                        '<h6>'+items.position+ '</h6>'
                        '<p>'+items.shortbio+ '</p>'
                            
                        });
                     })
                 
                 });
            }
           
        });
            
        

                
        
           
             
            
        
             
        
     

//Ajax global method to load content of glithch json file
