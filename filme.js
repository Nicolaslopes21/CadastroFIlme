let titulo=document.getElementById("titulo");
let diretor=document.getElementById("diretor");
let anoLan=document.getElementById("ano");
let lista=document.getElementById("lista");
let button=document.getElementById("butao");




function exibaFilme (){
   let valorTitulo = titulo.value
   let valorDiretor = diretor.value 
   let valorAno = ano.value
   
   if(valorTitulo!= "" && valorDiretor!= "" && valorAno!= "" ){
   
   let novoFilme=document.createElement("p")

   novoFilme.innerHTML = (valorTitulo+"  - "+valorDiretor+"("+valorAno+")")
          
   lista.appendChild(novoFilme)

   titulo.value = ""
   diretor.value = ""
   ano.value = ""

   }
   
}
button.addEventListener('click',exibaFilme);
