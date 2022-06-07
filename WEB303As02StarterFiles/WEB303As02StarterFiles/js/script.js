// WEB303 Assignment 2
// Your Name Here
$('document').ready(function(){
    $('#prospect').click(function(){
       let prospect= $('#content').load('prospect.html');
        let content=$(this).attr('#content');
        prospect.hide().load(
            content,{},function(){
                prospect.fadeIn('slow')
            }
            );
            return false;
    });
    $('#convert').click(function(){
        let solution=$('#solution').load('convert.html');
        let content=$(this).attr('#content');
        solution.hide().load(
            content,{},function(){
                solution.fadeIn('slow')
            }
            );
            return false;
    });
    $('#retain').click(function(){
        let retain=$('#solution').load('retain.html');
        let content=$(this).attr('#content');
        retain.hide().load(
            content,{},function(){
                retain.fadeIn('slow')
            }
            );
            return false;
    });
});
