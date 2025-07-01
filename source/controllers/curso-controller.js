function listarCurso(req,res) {
    res.send("Função responsável por listar os cursos");
}
function cadastrarCurso(req,res) {
    res.send("Função responsável por cadastrar novo curso");
}
function deletarCurso(req,res) {
    res.send("Função responsável por deletar um curso");
}

module.exports = {
    listarCurso,
    cadastrarCurso,
    deletarCurso
}