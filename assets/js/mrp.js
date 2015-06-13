$(function() {
    $("#atualizarMrp").click(function(){
        var bicicletas = parseInt($("#num-bicicletas").val());
        
        if(isNaN(bicicletas))
            return;

        $("#qtd-bicicleta").html("(" + bicicletas + ")");

        var guidao = 1 * bicicletas;
        $("#qtd-guidao").html("(" + guidao + ")");

        var montagemQuadro = 1 * bicicletas;
        $("#qtd-montagem-quadro").html("(" + montagemQuadro + ")");

        var roda = 2 * bicicletas;
        $("#qtd-roda").html("(" + roda + ")");

        var quadro = 1 * bicicletas;
        $("#qtd-quadro").html("(" + quadro + ")");

    });
});
