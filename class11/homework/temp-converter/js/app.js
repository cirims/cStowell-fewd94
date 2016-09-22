

$("#submit").click(function(){
	var num1 = parseFloat($("#input-temp").val());
	convertTemp(num1);
});

function convertTemp(num1){

	if(($('select').val()) === "celsius"){
		$("#output-temp").html((num1 * 1.8) + 32 + "f");
	}else{
		$("#output-temp").html((num1 - 32) / 1.8 + "c");
	}
};