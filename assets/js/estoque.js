$(function(){ 
    var operacao = "A"; //"A"=Adição; "E"=Edição 
    var indice_selecionado = -1; //Índice do item selecionado na lista 
    var tbProdutos = localStorage.getItem("tbProdutos");// Recupera os dados armazenados
    tbProdutos = JSON.parse(tbProdutos); // Converte string para objeto 
    if(tbProdutos == null) // Caso não haja conteúdo, iniciamos um vetor vazio
      tbProdutos = [];

    $("#novoProduto").submit(function(event){
        if(operacao == "A")
            return novoProduto();
        else
            return editarProduto();
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
            listaProdutos = listaProdutos.concat('<td class="product-entry"><a href="#" class="btn btn-info btn-editar" data-toggle="modal" data-target="#myModal" alt="' + prod.Id + '"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a><a href="#" class="btn btn-danger btn-excluir" alt="' + prod.Id + '"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>');
            listaProdutos = listaProdutos.concat("</tr>");
        }
        $("#listaProdutos").fadeIn( "slow", function() {
            $("#listaProdutos").html(listaProdutos);
        });
        
    }
    listarProdutos();

    $(".btn-excluir").click(function(){
        indice_selecionado = $(this).attr("alt");
        excluirProduto();
        listarProdutos();
        location.reload();
    });

    function excluirProduto(){
        for(var i in tbProdutos){
            var prod = JSON.parse(tbProdutos[i]);
            if(prod.Id == indice_selecionado){
                tbProdutos.splice(i, 1);
                localStorage.setItem("tbProdutos", JSON.stringify(tbProdutos));
            }
        }
    }

    function novoProduto() {
        var produto = JSON.stringify({
            Id: tbProdutos.length.toString(),
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
    }

    $(".btn-editar").click(function(){
        operacao = "E";
        var index = $(this).attr("alt");

        for(var i in tbProdutos){
            var prod = JSON.parse(tbProdutos[i]);
            if(prod.Id == index){
                indice_selecionado = i;
            }
        }

        var prod = JSON.parse(tbProdutos[indice_selecionado]);
        $("#produto").val(prod.Produto);
        $("#quantidade").val(parseInt(prod.Quantidade, 10));
        $("#preco").val(parseFloat(prod.Preco, 10));
        $("#tipo").val(prod.Tipo.trim());
        $("#cadastrarProduto").html("Atualizar");
    });

    function editarProduto(){
        tbProdutos[indice_selecionado] = JSON.stringify({
            Id: tbProdutos[indice_selecionado].Id,
            Produto: $("#produto").val(),
            Quantidade: $("#quantidade").val().toString(),
            Preco: $("#preco").val().toString(),
            Tipo: $("#tipo").val()
        });
        localStorage.setItem("tbProdutos", JSON.stringify(tbProdutos));
        operacao = "A";
        return true;
    }

    $("#inserirNovoProduto").click(function(){
        resetForm();
    });

    function resetForm() {
        $("#produto").val("");
        $("#quantidade").val("");
        $("#preco").val("");
        $("#tipo").val("A");
        $("#cadastrarProduto").html("Cadastrar");
    }

});
