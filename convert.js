
// ITS WAS DIRECT METHOD //

// document.getElementById("convbtn").onclick = function(){
// var binary1 = parseInt(document.getElementById("binary").value);
// var decimal = parseInt(binary1, 2).toString(10);
// var hexa = parseInt(binary1, 2).toString(16);
// var octal = parseInt(binary1, 2).toString(8);


//     document.getElementById("result1").innerHTML = "The Decimal Value of " +binary1 + " is " +decimal;
//     document.getElementById("result2").innerHTML = "The HexaDecimal Value of " +binary1 +" is " +hexa;
//     document.getElementById("result3").innerHTML = "The Octal Value of " +binary1 +" is " +octal;
// }


// NOW USING SWITCH CASE for binary 

document.getElementById("convbtn").onclick = function(){
    var binary1 = parseInt(document.getElementById("binary").value);
// var input=prompt("Do you Want to convert into DEIMAL/HEXADECIMAL/OCTAL?");
var ConversionType = document.getElementById("ConversionType").value;
switch(ConversionType){
    case "decimal":
        document.getElementById("result1").innerHTML = "The Decimal is " +parseInt(binary1,2).toString(10);
        break;
    case "hexadecimal":
        document.getElementById("result2").innerHTML ="The HexaDecimal is " +parseInt(binary1,2).toString(16);
        break;
    case "octal":
        document.getElementById("result3").innerHTML = "The Octal is " +parseInt(binary1,2).toString(8);
        break;
    case "all":
        document.getElementById("result1").innerHTML = "The Decimal is " +parseInt(binary1,2).toString(10);
        document.getElementById("result2").innerHTML ="The HexaDecimal is " +parseInt(binary1,2).toString(16);
        document.getElementById("result3").innerHTML = "The Octal is " +parseInt(binary1,2).toString(8);
        break;
    default :
         alert("opps! You Gave the Wrong Input. Try Once Again!!    ")
         break;




}
}

// for decimal 

document.getElementById("convdecimalbtn").onclick = function(){
    var decimal2 = parseInt(document.getElementById("decimal1").value);
// var input=prompt("Do you Want to convert into DEIMAL/HEXADECIMAL/OCTAL?");
var Conversion10Type = document.getElementById("Conversion1Type").value;
switch(Conversion10Type){
    case "binary":
        document.getElementById("result4").innerHTML = "The Binary is " +parseInt(decimal2,10).toString(2);
        break;
    case "hexadecimal":
        document.getElementById("result5").innerHTML ="The HexaDecimal is " +(decimal2,10).toString(16);
        break;
    case "octal":
        document.getElementById("result6").innerHTML = "The Octal is " +parseInt(decimal2,10).toString(8);
        break;
    case "all":
        document.getElementById("result4").innerHTML = "The Binary is " +parseInt(decimal2,10).toString(2);
        document.getElementById("result5").innerHTML ="The HexaDecimal is oops!Code ma error xa yarrr😔" //+parseInt(decimal2,10).toString(16).toUpperCase();
        document.getElementById("result6").innerHTML = "The Octal is " +parseInt(decimal2,10).toString(8);
        break;
    default :
         alert("opps! You Gave the Wrong Input. Try Once Again!!    ")
         break;




}
}


