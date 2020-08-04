function Consulta_cep(){
    $(".progresso").show(0);
    cep = document.getElementById("cep").value;
    url = "https://viacep.com.br/ws/" + cep +"/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#resultado").html(response.cep);
            $("#resultado1").html(response.uf);
            $("#resultado2").html(response.localidade);
            $("#resultado3").html(response.logradouro);
            $("#titulo").html("CEP: " + response.cep);
            $(".progresso").hide(0);
        }
    })
}
$(function(){
    $(".progresso").hide(0);
})