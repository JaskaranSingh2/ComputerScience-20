function process() {
    var input = document.getElementById("grab").value;
    var final = input.toUpperCase();
    var values = ["KFC", "MCD", "SSN", "LOL", "GDP", "PPP"];
    var actual = ["Kentucky's Fried Chicken", "MacDonald's", "Social Security Number", "Laugh Out Loud", "Gross Domestic Product", "Purchasing Power Parity"]; 
    const report = document.getElementById("display");
    
    for (i=0; i<=values.length; i++) {
        if (final == values[i]) {
        report.innerHTML = actual[i]; 
        var final = input.toUpperCase();
        }
        else {
            report.innerHTML = "NOT FOUND"
        }
    }
}


process();