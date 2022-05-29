/*
	WEB 303 Assignment 1 - jQuery
	{Your Name Here}
*/
/*
	WEB  Assignment 1 - jQuery
	{Ajima Master}
*/

//create an event handler to run whenever price value has changed

$('document').ready(function(){
    $('#price').onkeyup(function(){
        calculateTax();
    });
	//click event for adding price in the list
    $("#add-price").on('click',function(){
		let price=$('#price').val();
        $('#price-list').append('<li>'+price+'</li>');
		calculateTax();
		return false;	
		
    });
    calculateTax();
});

//calculate tax
function calculateTax(){
    //get value of price
		let price=parseFloat($('#price').val());
		$('#price-list').append(price);
		let tax=price*0.13;
        let totalTax=price+tax;
		//add price+tax as list item to button
        $('this').find('#tax').append('<li>'+totalTax+'</li>').val();
        let subTotal=totalTax.toFixed(2);
        $("#tax").html('',+totalTax);
        $("ul#price-list").html(('',+subTotal-tax).toFixed(2));
        	
}

