var leitorDeCSV = new FileReader()
window.onload = function init() {
    leitorDeCSV.onload = leCSV;
}

    function pegaCSV(inputFile) {
        var file = inputFile.files[0];
        leitorDeCSV.readAsText(file);
    }

    function leCSV(evt) {

        var fileArr = evt.target.result.split('\n');
        var strDiv = '<table>';

        for (var i=0; i<fileArr.length; i++) {
        strDiv += '<tr>';
        var fileLine = fileArr[i].split(',');
        for (var j=0; j<fileLine.length; j++) {
        strDiv += '<td>'+fileLine[j].trim()+'</td>';
        }
        strDiv += '</tr>';
        }

        strDiv += '</table>';
        console.log(strDiv);
    }
$(function() {
    
    $("#file-upload").submit(function(event){
        $("#cadastro-manual").trigger( "click" );
    });
    
    function pegaCSV(inputFile) {
        var file = inputFile.files[0];
        leitorDeCSV.readAsText(file);
    }

    function leCSV(evt) {

        var fileArr = evt.target.result.split('\n');
        var strDiv = '<table>';

        for (var i=0; i<fileArr.length; i++) {
        strDiv += '<tr>';
        var fileLine = fileArr[i].split(',');
        for (var j=0; j<fileLine.length; j++) {
        strDiv += '<td>'+fileLine[j].trim()+'</td>';
        }
        strDiv += '</tr>';
        }

        strDiv += '</table>';
        console.log(strDiv);
    }
});
