// Updated by Rafael Barbosa Vendramini Costa - Brazil 2021/05/05

function updateRate() // function for slider automization
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute() //function for button compute interest
{
    var checkprin = document.getElementById("principal").value; // catch value of principal
        if(checkprin <= 0){ // check if value is < or = 0
            alert("Please enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    //return true; // if all ok return true
    else {
    var principal = document.getElementById("principal").value; // catch value of principal
    var rate = document.getElementById("rate").value; // catch value of rate
    var years = document.getElementById("years").value; // catch value of years
    var amount = (principal*years*rate / 100); // compute of amount
    var year = new Date().getFullYear()+parseInt(years); // compute years from now to selected in future
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>At an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>";
    }
}    