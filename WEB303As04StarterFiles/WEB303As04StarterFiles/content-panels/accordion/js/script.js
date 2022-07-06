/*
 {Ajima Master}
*/
$('document').ready(function(){
    $('.accordion').on('click', '.accordion-control', function(e) 
{
e.preventDefault();
$(this)
/*open and close pannel*/
.next('.accordion-panel')
.not('animated')
.slideToggle();
})
$('#accordion').on('click', '.content-1', function(e) 
{
e.preventDefault();
$(this)
/*open and close pannel*/
.next('.acc-item-content')
.not('animated')
.slideToggle();
})
});
