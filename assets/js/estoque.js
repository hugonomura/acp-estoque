$(function(){ 
    var operacao = "A"; //"A"=Adição; "E"=Edição 
    var indice_selecionado = -1; //Índice do item selecionado na lista 
    var tbProdutos = localStorage.getItem("tbProdutos");// Recupera os dados armazenados
    tbProdutos = JSON.parse(tbProdutos); // Converte string para objeto 
    if(tbProdutos == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbProdutos = [];

    $("#novoProduto").submit(function(event){
        var produto = JSON.stringify({
            Id: '000' + tbProdutos.length.toString(),
            Produto: $("#produto").val(),
            Quantidade: $("#quantidade").val().toString(),
            Preco: $("#preco").val().toString(),
            Tipo: $("#tipo").val()
        });
        tbProdutos.push(produto);
        localStorage.setItem("tbProdutos", JSON.stringify(tbProdutos));
        event.preventDefault();
        $('#myModal').modal('hide');
        listarProdutos();
        location.reload();
        return true;
    });

    function listarProdutos(){
        var listaProdutos = "";
        $("#listaProdutos").html("");
        for(i in tbProdutos){
            var prod = JSON.parse(tbProdutos[i]);
            listaProdutos = listaProdutos.concat("<tr>");
            listaProdutos = listaProdutos.concat('<td class="product-entry" id="id-produto">' + prod.Id + '</td>');
            listaProdutos = listaProdutos.concat('<td class="product-entry">' + prod.Produto + '</td>');
            listaProdutos = listaProdutos.concat('<td class="product-entry">' + prod.Quantidade + '</td>');
            listaProdutos = listaProdutos.concat('<td class="product-entry">' + prod.Preco + '</td>');
            listaProdutos = listaProdutos.concat('<td class="product-entry">' + prod.Tipo + '</td>');
            listaProdutos = listaProdutos.concat('<td class="product-entry"><a href="#" class="btn btn-info"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a><a href="#" class="btn btn-danger btn-excluir" alt="' + prod.Id + '"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>');
            listaProdutos = listaProdutos.concat("</tr>");
        }
        $("#listaProdutos").fadeIn( "slow", function() {
            $("#listaProdutos").html(listaProdutos);
        });
        
    }
    listarProdutos();

    $(".btn-excluir").click(function(){
        indice_selecionado = parseInt($(this).attr("alt"));
        excluirProduto();
        listarProdutos();
        location.reload();
    });

    function excluirProduto(){
        console.log(tbProdutos);
        tbProdutos.splice(indice_selecionado, 1);
        localStorage.setItem("tbProdutos", JSON.stringify(tbProdutos));
    }

    function editarProduto(){
        tbProdutos[indice_selecionado] = JSON.stringify({
            Id: tbProdutos[indice_selecionado].Id,
            Produto: $("#produto").val(),
            Quantidade: $("#quantidade").val().toString(),
            Preco: $("#preco").val().toString(),
            Tipo: $("#tipo").val()
        });        
        return true;
    }

});
