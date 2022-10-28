import {createHash} from 'crypto';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash("Uma String Qualquer"));

class Uuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){ 
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }

        console.log("Usuário ou senha inválidos!");
        return false;
    }
}

const usuario = new Uuario("Joao", "123456");

usuario.autentica("Joao", "123456");

usuario.autentica("Joa", "123456");
usuario.autentica("Joao", "12345");