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
        
        for(var i in tbProdutos) {
            var prod = JSON.parse(tbProdutos[i]);
            var h = parseFloat(prod.Preco) / parseInt(prod.DemandaAnual);
            var lep = Math.sqrt(parseInt(prod.DemandaAnual) * parseFloat(prod.Preco) * 2 / h);
            var pp = lep / 2;
            custoAnual += (pp / 2 * h) + (parseInt(prod.DemandaAnual) / pp * parseFloat(prod.Preco));
        }
        return Number(custoAnual.toFixed(2));
    }

    function calculaCustoAnualRevisaoPeriodica() {
        var custoAnual = 0;
        
        for(var i in tbProdutos) {
            var prod = JSON.parse(tbProdutos[i]);
            var h = parseFloat(prod.Preco) / parseInt(prod.DemandaAnual);
            var lep = Math.sqrt(parseInt(prod.DemandaAnual) * parseFloat(prod.Preco) * 2 / h);
            var pp = lep / 2;
            var t = Math.sqrt(2 * parseFloat(prod.Preco) / (parseFloat(prod.Preco) *  (parseInt(prod.DemandaAnual) / pp) * prod.Preco) * parseInt(prod.DemandaAnual));

            var revPeriodica = parseInt(prod.DemandaAnual) * ((parseInt(prod.DemandaAnual) / pp) + t);
            custoAnual += (revPeriodica / 2 * h) + (parseInt(prod.DemandaAnual) / revPeriodica * parseFloat(prod.Preco));
        }
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
        var custoAnualLoteEconomico = calculaCustoAnualLoteEconomico();
        var custoAnualPontoPedido = calculaCustoAnualPontoPedido();
        var custoAnualRevisaoPeriodica = calculaCustoAnualRevisaoPeriodica();
        initClass();

        var min = custoAnualLoteEconomico;
        if(custoAnualPontoPedido < min){
            min = custoAnualPontoPedido;
        }
        if (custoAnualRevisaoPeriodica < min) {
            min = custoAnualRevisaoPeriodica;
        }

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