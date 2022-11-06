var initialprice= document.querySelector("#initial-price");
var stockquantity= document.querySelector("#stocks-quantity");
var currentprice= document.querySelector("#current-price");
var submitbtn= document.querySelector("#submit-btn");
var outputbox= document.querySelector("#output-box"); 


submitbtn.addEventListener("click",submitHandler)
function submitHandler() {
    var ip=Number(initialprice.value);   
    var qty=Number(stockquantity.value);
    var curr= Number(currentprice.value);

    calulateprofitandloss(ip,qty,curr)
}


function calulateprofitandloss(initial,quantity,current,) { 
 if(initial>current){
    var loss =(initial-current)*quantity;
    var losspercentage =(loss/initial)*100;
    showoutputbox(`Hey the loss is ${loss} and the percent is ${losspercentage}%`);
 }else if (current>initial){
    var profit =(current-initial)*quantity;
    var profitpercentage =(profit/initial)*100;
   showoutputbox(`Hey the profit is ${profit} and the percent is ${profitpercentage}%`);

 }else {
  showoutputbox(`No pain No gain`);
 }

};

function showoutputbox(message) {
    outputbox.innerHTML=message
    
}
