//Calculate Tip

function CalculateTip() {
  //querrySelector() Method Returns The Element Value With Specified class
    var billAmt =Document.querySelector(".BillAmt").Value;
    var Servicequality = Document.querySelector(".Servicequality").Value;

    var tipTotal = Document.querySelector(".TipTotal").Value;
    var billTotal = Document.querySelector(".BillTotal").Value;

  //Tip Calculation

    var Total = billAmt * Servicequality; //For Tip Calculation

    var Total = ParseFloat(billAmt) + ParseFloat(Total); //For Total Bill Amount Calculation

  //Display  Tip

    Document.querySelector(".tipTotal").InnerHTML = Total;

  //Display Total

    Document.querySelector(".billTotal").InnerHTML = Total;
}

//Click To Call Function

Document.querySelector(".Calculate").Onclick = function (){
    CalculateTip();
};