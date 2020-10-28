function makeTable() {
    var minX = parseInt(document.getElementById("minRows").value);
    var maxX = parseInt(document.getElementById("maxRows").value);
    var minY = parseInt(document.getElementById("minColumns").value);
    var maxY = parseInt(document.getElementById("maxColumns").value);
    console.log("The min X is: " + minX +
        "\nThe max X is: " + maxX +
        "\nThe min Y is: " + minY +
        "\nThe max Y is: " + maxY);

    //Clears table and errors
    var table = ""
    var errorMsg = ""
    document.getElementById("errors").innerHTML = errorMsg;
    document.getElementById("generateTable").innerHTML = table;

    //Error cases
    if (minX > maxX) { // Min is bigger then Max
        var errorMsg1 = "The minimum row is bigger then the maximum row.";
        errorMsg += errorMsg1;
        errorMsg += "<br>";
    }
    if (minY > maxY) { // Min is bigger then Max
        var errorMsg2 = "The minimum column is bigger then the maximum column.";
        errorMsg += errorMsg2;
        errorMsg += "<br>";
    }
    if (minX < -50 || minY < -50 || maxX > 50 || maxY > 50) {
        var errorMsg3 = "Please keep the values between -50 to 50.";
        errorMsg += errorMsg3;
        errorMsg += "<br>";
    }
    if (errorMsg != "") {
        document.getElementById("errors").innerHTML = errorMsg;
        return;
    }

    //Math for the table
    for (var row = minX - 1; row <= maxX; row++) {
        table += "<tr>";
        if (row == minX - 1) {
            table += "<td></td>";
            for (var col = minY; col <= maxY; col++) {
                table += "<td>" + col + "</td>";
            }
        }
        else {
            table += "<td>" + row + "</td>";
            for (col = minY; col <= maxY; col++) {
                table += "<td>" + row * col + "</td>";
            }
        }
        table += "</tr>";
    }

    //Display the table
    document.getElementById("generateTable").innerHTML = table;
}