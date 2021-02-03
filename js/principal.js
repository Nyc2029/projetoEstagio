function vai(){
    var nome = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confPassword = document.getElementById('confPassword').value;
    if(nome==""||email==""||password==""||confPassword==""){
        alert("Preencha todos os campos");
    }else{
        if(password!=confPassword){
            alert('Senhas não conferem');
        }else{
            tudo={};
            tudo.nome=nome;
            tudo.email=email;
            tudo.password=password;
            console.log(tudo);
        }
    }
}