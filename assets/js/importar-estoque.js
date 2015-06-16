$(function() {
    var leitorDeCSV = new FileReader();
    window.onload = function init() {
        leitorDeCSV.onload = leCSV;
    }

    $("#form-submit").click(function(){
        var file = $("#csv-file").get(0).files[0];
        leitorDeCSV.readAsText(file);

    });
    
    function pegaCSV(inputFile) {
        var file = inputFile.files[0];
        leitorDeCSV.readAsText(file);
    }

    function leCSV(evt) {
        localStorage.removeItem("tbProdutos");
        var tbProdutos = [];
        var fileArr = evt.target.result.split('\n');

        for (var i = 0; i < fileArr.length; i++) {
            var prodEntry = fileArr[i].split(',');

            if(prodEntry.length != 5)
                continue;

            var prod = JSON.stringify({
                Id: tbProdutos.length.toString().trim(),
                Produto: prodEntry[0],
                TamLote: prodEntry[1].toString().trim(),
                Preco: prodEntry[2].toString().trim(),
                DemandaAnual: prodEntry[3].toString().trim(),
                Tipo: prodEntry[4].toString().trim()
            });
            tbProdutos.push(prod)
        }
        localStorage.setItem("tbProdutos", JSON.stringify(tbProdutos));

        $("#file-upload").submit();
    }
});
