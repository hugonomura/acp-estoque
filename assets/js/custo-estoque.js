$(function(){
    function calculaCustoAnualLoteEconomico() {
        var custoAnual = 0;
        return custoAnual;
    }

    function calculaCustoAnualPontoPedido() {
        var custoAnual = 0;
        return custoAnual;
    }

    function calculaCustoAnualRevisaoPeriodica() {
        var custoAnual = 0;
        return custoAnual;
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