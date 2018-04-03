var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtosadm"]', function (e) {
    firebase.database().ref('estoque').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
        
    
        snapshot.forEach(function(item){
                var listHtml = '<div class="row block block-strong">';
                listHtml += '<td class="label-cell col-20">'+item.key+'</td>';
                //listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Id +'</div>';
                listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Titulo +'</div>';
                listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Imagem +'</div>';
                listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Descricao +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});


function apagarrr(){
    
        var apagarrr = document.getElementById('excluirrr').value;
    
        apagardb(apagarrr);
    }
    
    function apagardb(apaga){
    
        return firebase.database().ref().child('estoque').child(apaga).remove();
    }
  