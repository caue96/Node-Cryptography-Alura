import {createCipheriv, createDecipheriv, randomBytes} from 'crypto';

const mensagem = "Esta é uma mensagem secreta";
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes-256-cbc', Buffer.from(chave), vi);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensagemCifrada);

const decifra = createDecipheriv('aes-256-cbc', Buffer.from(chave), vi);

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log(mensagemDecifrada.toString('utf-8'));