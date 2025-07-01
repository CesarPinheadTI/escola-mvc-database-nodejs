function listarAluno(req,res) {
    res.send("Função responsável por listar os alunos");
}
function cadastrarAluno(req,res) {
    res.send("Função responsável por cadastrar novo aluno");
}
function atualizarAluno(req,res) {
    res.send("Função responsável por ataulizar novo aluno");
}
function deletarAluno(req,res) {
    res.send("Função responsável por deletar um aluno");
}

module.exports = {
    listarAluno,
    cadastrarAluno,
    deletarAluno,
    atualizarAluno
}