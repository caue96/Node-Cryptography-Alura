import {scryptSync, randonBytes, timingSafeEqual} from 'crypto';

function criaHashComSal(senha){
    const salt = randomBytes(16).toString('hex');
    const hash = scryptSync(senha, salt, 64).toString('hex');

    return `${salt}:${hash}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.salt, this.hash] = criaHashComSal(senha).split(":");
    }

    autentica(nome, senha){
        if(nome === this.nome){
            const testHash = scryptSync(senha, salt, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testHash, hashReal);

            if(hashesCorrespondem){
                console.log("Usuário autenticado com sucesso!");
                return true;
            }
        }

        console.log("Usuário ou senha inválidos!");
        return false;
    }
}

const jm = new Usuario("Joao", "123456");

jm.autenticar("Joao", "123456");
jm.autenticar("Joa", "123456");
jm.autenticar("Joao", "123455");