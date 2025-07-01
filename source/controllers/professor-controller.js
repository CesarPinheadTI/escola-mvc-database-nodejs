function listarProfessor(req,res) {
    res.send("Função responsável por listar os professores");
}
function cadastrarProfessor(req,res) {
    res.send("Função responsável por cadastrar novo professor");
}
function atualizarProfessor(req,res) {
    res.send("Função responsável por atualizar novo professor");
}
function deletarProfessor(req,res) {
    res.send("Função responsável por deletar um professor");
}

module.exports = {
    listarProfessor,
    cadastrarProfessor,
    deletarProfessor,
    atualizarProfessor
}