import { db } from '../models/index.js';

const create = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
};

const findAll = async (req, res) => {
  const name = req.query.name;

  var condition = name
    ? { name: { $regex: new RegExp(name), $options: 'i' } }
    : {};

  try {
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Documento id: ' + id });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const id = req.params.id;

  try {
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar o Pokemon id: ' + id });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Pokemon id: ' + id });
  }
};

const removeAll = async (req, res) => {
  const id = req.params.id;

  try {
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos os Pokemons' });
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
