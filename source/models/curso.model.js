const bancoDados = require("../config/banco-dados")

async function listarTodosCursos() {
    const conexao = await bancoDados.conexao
    const query = await conexao.execute("SELECT * FROM cursos")
    return query[0]
}

module.exports = {
    listarTodosCursos
}