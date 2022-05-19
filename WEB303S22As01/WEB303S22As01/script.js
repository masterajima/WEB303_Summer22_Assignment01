/*
	WEB  Assignment 1 - jQuery
	{Ajima Master}
*/
//create event hander to calculate tax
$().on('keyup','#price',function(){
		const $=document.getElementById('#price');
})
function processEntries(){
	let subtotal=document.querySelector('subtotal').value;
	let tax_rate=document.querySelector('tax_rate').value;
}

let add_price=function(){
	let price=document.getElementById('#price').value;
	if(parseFloat(subtotal)<0||parseFloat(subtotal)>10000){
		$("subtotal").innerHTML="Must be positive number";
		return;
	}
	if(tax_rate<=0||tax_rate>=12){
		$(tax_rate).innerHTML="Must be positive number less than 12";
		return;
	}
	//calculate the tax
	let tax=(subtotal*tax_rate)/100;
	let total=tax+subtotal;
	//retrive the value
	$('total').value=total;
	$('tax').value=tax;
	$('tax_rate').value=tax_rate;
}
window.onload=function(){
	$('subtotal').focus();
}

