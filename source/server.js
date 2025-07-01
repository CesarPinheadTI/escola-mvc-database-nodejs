const express = require('express');
const app = express();

const cursoController = require('./controllers/curso-controller');
app.get ('/cursos', cursoController.listarCurso);
const professorController = require('./controllers/professor-controller');
app.get ('/professores', professorController.listarProfessor);
const alunoController = require('./controllers/aluno-controller');
app.get ('/alunos', alunoController.listarAluno);

app.listen (3000, function() {
    console.log("Servidor rodando na porta 3000")
})