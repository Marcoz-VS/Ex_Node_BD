const pool = require('./db');

async function listar() {
  const result = await pool.query('SELECT * FROM funcionarios');
  return result.rows;
}

async function buscarPorId(id) {
  const result = await pool.query(
    'SELECT * FROM funcionarios WHERE id = $1',
    [id]
  );
  return result.rows[0];
}

async function criar(nome, cargo) {
  const result = await pool.query(
    'INSERT INTO funcionarios (nome, cargo) VALUES ($1, $2) RETURNING *',
    [nome, cargo]
  );
  return result.rows[0];
}

async function atualizar(id, nome, cargo) {
  const result = await pool.query(
    'UPDATE funcionarios SET nome = $1, cargo = $2 WHERE id = $3 RETURNING *',
    [nome, cargo, id]
  );
  return result.rows[0];
}

async function deletar(id) {
  await pool.query('DELETE FROM funcionarios WHERE id = $1', [id]);
  return { msg: 'Funcionário removido' };
}

module.exports = { listar, buscarPorId, criar, atualizar, deletar };
