(async () => {
    const lojaDB = require('./lojaDB.js');
    const loja= require ('./loja');
})
    try {
        const resultado = await database.sync();
        console.log(resultado);

    } catch (error) {
        console;log(error);
    }
