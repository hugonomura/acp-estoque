$(function(){
    var tbProdutos = localStorage.getItem("tbProdutos");// Recupera os dados armazenados
    tbProdutos = JSON.parse(tbProdutos); // Converte string para objeto 

    function calculaCustoAnualLoteEconomico() {
        var custoAnual = 0;
        for(var i in tbProdutos) {
            var prod = JSON.parse(tbProdutos[i]);
            var h = parseFloat(prod.Preco) / parseInt(prod.DemandaAnual);
            var lep = Math.sqrt(parseInt(prod.DemandaAnual) * parseFloat(prod.Preco) * 2 / h);
            custoAnual += (lep / 2 * h) + (parseInt(prod.DemandaAnual) / lep * parseFloat(prod.Preco));
        }
        return Number(custoAnual.toFixed(2));
    }

    function calculaCustoAnualPontoPedido() {
        var custoAnual = 0;
        return Number(custoAnual.toFixed(2));
    }

    function calculaCustoAnualRevisaoPeriodica() {
        var custoAnual = 0;
        return Number(custoAnual.toFixed(2));
    }

    function initClass(){
        $("#div-lote-economico").removeClass("alert-success");
        $("#div-lote-economico").addClass("alert-info");
        $("#div-ponto-pedido").removeClass("alert-success");
        $("#div-ponto-pedido").addClass("alert-info");
        $("#div-revisao-periodica").removeClass("alert-success");
        $("#div-revisao-periodica").addClass("alert-info");
    }

    $("#btn-simular").click(function(){
        var min = 0;
        var custoAnualLoteEconomico = calculaCustoAnualLoteEconomico();
        var custoAnualPontoPedido = calculaCustoAnualPontoPedido();
        var custoAnualRevisaoPeriodica = calculaCustoAnualRevisaoPeriodica();
        initClass();


        $("#lote-economico").html("R$ " + custoAnualLoteEconomico.toString());
        if(custoAnualLoteEconomico == min){
            $("#div-lote-economico").addClass("alert-success");
            $("#div-lote-economico").removeClass("alert-info");
        }

        $("#ponto-pedido").html("R$ " + custoAnualPontoPedido.toString());
        if(custoAnualPontoPedido == min){
            $("#div-ponto-pedido").addClass("alert-success");
            $("#div-ponto-pedido").removeClass("alert-info");
        }

        $("#revisao-periodica").html("R$ " + custoAnualRevisaoPeriodica.toString());
        if(custoAnualRevisaoPeriodica == min){
            $("#div-revisao-periodica").addClass("alert-success");
            $("#div-revisao-periodica").removeClass("alert-info");
        }


    });

});