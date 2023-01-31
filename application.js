const loja = require("./schema");

const returnFunc = await loja.create({
    nome_loja: 'SQL Store',
    cidade_loja: 'Recife',
    estado_loja: 'Pernambuco',
    telefone_loja: '00 77777-7777'
})

const readDB = await loja.findByPk(1);
returnFunc.cidade_loja = 'Olinda'
