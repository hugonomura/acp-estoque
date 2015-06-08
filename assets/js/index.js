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
            console.log(prodEntry);

            if(prodEntry.length != 4)
                continue;

            var prod = JSON.stringify({
                Id: tbProdutos.length.toString(),
                Produto: prodEntry[0],
                Quantidade: prodEntry[1].toString(),
                Preco: prodEntry[2].toString(),
                Tipo: prodEntry[3]
            });
            tbProdutos.push(prod)
        }
        localStorage.setItem("tbProdutos", JSON.stringify(tbProdutos));
        console.log(JSON.stringify(tbProdutos));

        $("#file-upload").submit();
    }
});
