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
	$("#add-price").on("click",function(){
		calculateTax();
	})
	});
	//calculate tax that wouldbe add to price 
	function calculateTax(){
	
		//get value of price
		let price=parseFloat($("#price").val());
	
		let tax=price*0.13;
		let totalTax=price+tax;
		//use toFixed() to round the number
		let calculatedTax=tax.toFixed(2);
		$("#tax").text('' +calculatedTax);
	$("ul#price-list").text('',totalTax);
	}
	
	//window.onload=function(){
		//$('#calculate').onclick=processEntries();
	}
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
