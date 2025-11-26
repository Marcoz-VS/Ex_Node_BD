const funcionarioModel = require('../models/funcionarioModel');

const listar = async (req, res) => {
  const dados = await funcionarioModel.listar();
  res.json(dados);
};

const buscarPorId = async (req, res) => {
  const { id } = req.params;
  const dado = await funcionarioModel.buscarPorId(id);
  res.json(dado);
};

const criar = async (req, res) => {
  const { nome, cargo } = req.body;
  const novo = await funcionarioModel.criar(nome, cargo);
  res.json(novo);
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, cargo } = req.body;
  const atualizado = await funcionarioModel.atualizar(id, nome, cargo);
  res.json(atualizado);
};

const deletar = async (req, res) => {
  const { id } = req.params;
  const resultado = await funcionarioModel.deletar(id);
  res.json(resultado);
};

module.exports = { listar, buscarPorId, criar, atualizar, deletar };
