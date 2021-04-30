document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

if(document.getElementById("nome").value !=""  &&  document.getElementById("contato").value !="")  {
     alert("Prontinho! Agora você receberá todas as novidades no seu e-mail.")
}else{
    alert ("Não é permitido deixar os campos vazios. Por favor, os preencha corretamente.");    
    }
}

