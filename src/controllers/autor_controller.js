const autor = require('../models/autor_model');

// exports.createautor = async (req, res) => {
//   try {
//     const autor = new autor(req.body);
//     await autor.save();
//     res.status(201).json(autor);
//   } catch (error) {
//     res.status(400).json({ error: 'Erro ao criar autor' });
//   }
// };

exports.createautor = async (req, res) => {
  try {
    const autor = await autor.create(req.body);
    res.status(201).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar autor' });
  }
};

exports.getautors = async (req, res) => {
  try {
    const autors = await autor.find().populate('id_pet');
    res.status(200).json(autors);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar autors' });
  }
};

exports.getautorById = async (req, res) => {
  try {
    const autor = await autor.findById(req.params.id);
    res.status(200).json(autor);
  } catch (error) {
    res.status(404).json({ error: 'autor não encontrado' });
  }
};

exports.updateautor = async (req, res) => {
  try {
    const autor = await autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar autor' });
  }
};

exports.deleteautor = async (req, res) => {
  try {
    await autor.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar autor' });
  }
};