const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://cesareal9:LnzQwcf3p9VXD6ow@cluster0.5vbik.mongodb.net/');
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};

connectDB();

module.exports = mongoose;