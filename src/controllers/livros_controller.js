const livros = require('../models/livro_model.js');

// exports.createlivros = async (req, res) => {
//   try {
//     const livros = new livros(req.body);
//     await livros.save();
//     res.status(201).json(livros);
//   } catch (error) {
//     res.status(400).json({ error: 'Erro ao criar livros' });
//   }
// };

exports.createlivros = async (req, res) => {
  try {
    const livros = await livros.create(req.body);
    res.status(201).json(livros);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar livros' });
  }
};

exports.getlivros = async (req, res) => {
  try {
    const livross = await livros.find();
    res.status(200).json(livross);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar livross' });
  }
};

exports.getlivrosById = async (req, res) => {
  try {
    const livros = await livros.findById(req.params.id).populate('id_pet');
    res.status(200).json(livros);
  } catch (error) {
    res.status(404).json({ error: 'livros não encontrado' });
  }
};

exports.updatelivros = async (req, res) => {
  try {
    const livros = await livros.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(livros);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar livros' });
  }
};

exports.deletelivros = async (req, res) => {
  try {
    await livros.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar livros' });
  }
};