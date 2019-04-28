"use strict"
function runTOLD{
    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile('bin/TestWorkbook.xlsx')//Change file name here or give file path
    let TempC = document.getElementByID("TempC").value;
    .then(function() {
        var worksheet = workbook.getWorksheet('TOLDin');
        worksheet.getCell('E7').value = TempC;//Change the cell number here
    return workbook.xlsx.writeFile('TestWorkbook.xlsx')//Change file name here or give     file path
        });
}


