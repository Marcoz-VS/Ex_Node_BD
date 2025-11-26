const express = require('express');
const app = express();
const funcionarioRoutes = require('./routes/funcionarioRoutes');

app.use(express.json());
app.use('/funcionarios', funcionarioRoutes);

app.get('/', (req, res) => {
  res.json({ msg: "Servidor ativo" });
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000");
});
