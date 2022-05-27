/*
	WEB  Assignment 1 - jQuery
	{Ajima Master}
*/

//create an event handler to run whenever price value has changed
$('document').ready(function(){
	$('form#price').keyup(function(){
		calculateTax();
	});
	//add event handler to button
	$("#add-price").on('click',function(){
		let taxValue=$('#price').val();
		$('#price-list').append('<li>'+taxValue+'</li>');	
	});
		calculateTax();
	});
	
	//calculate tax that wouldbe add to price 
	function calculateTax(){
	
		//get value of price
		let taxPercent=0.13
		let price=parseFloat($("#price").val());
taxPercent=$('#add-price').val();
	
		let tax=price*taxPercent;
		let totalTax=price+tax;
		//use toFixed() to round the number
		let calculatedTax=tax.toFixed(2);
		$("#tax").append('',+totalTax);
	$("ul#price-list").append('',+calculatedTax-tax).toFixed(2);
	}
	
	//window.onload=function(){
		//$('#calculate').onclick=processEntries();
	//

	/*
	$("form").on('keyup','#price',function(){
		const price=parseFloat($('#price').val());
		const tax=parseFloat($('#tax').val());
		let taxCal=(price*tax)/100;
		function processEntries(){}
		$('#add-price').html(taxCal.toFixed(2));
		$('#tax').html((price-taxCal).toFixed(2));
	});
*/