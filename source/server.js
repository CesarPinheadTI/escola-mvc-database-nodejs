const express = require('express');
const app = express();

const cursoController = require('./controllers/curso-controller');
const professorController = require('./controllers/professor-controller');
const alunoController = require('./controllers/aluno-controller');

app.get ('/cursos', cursoController.listarCurso);
app.get ('/professores', professorController.listarProfessor);
app.get ('/alunos', alunoController.listarAluno);

app.post ('/cadastrar-cursos', cursoController.cadastrarCurso);
app.post ('/cadastrar-professores', professorController.cadastrarProfessor);
app.post ('/cadastrar-alunos', alunoController.cadastrarAluno);

app.put ('/atualizar-cursos', cursoController.atualizarCurso);
app.put ('/atualizar-professores', professorController.atualizarProfessor);
app.put ('/atualizar-alunos', alunoController.atualizarAluno);

app.delete ('/deletar-cursos', cursoController.deletarCurso);
app.delete ('/deletar-professores', professorController.deletarProfessor);
app.delete ('/deletar-alunos', alunoController.deletarAluno);

app.listen (3000, function() {
    console.log("Servidor rodando na porta 3000")
})