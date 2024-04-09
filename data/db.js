const usuarios = [
  {
    id: 1,
    nome: "João",
    email: "joao@abc.com",
    idade: 25,
    perfil_id: 1,
  },
  {
    id: 2,
    nome: "Maria",
    email: "maria@abc.com",
    idade: 33,
    perfil_id: 2,
  },
  {
    id: 3,
    nome: "Pedro",
    email: "pedro@abc.com",
    idade: 42,
    perfil_id: 3,
  },
  {
    id: 4,
    nome: "Ana",
    email: "ana@abc.com",
    idade: 20,
    perfil_id: 1,
  },
  {
    id: 5,
    nome: "Carlos",
    email: "carlos@abc.com",
    idade: 55,
    perfil_id: 2,
  },
];

const perfis = [
  { id: 1, nome: "Operador" },
  { id: 2, nome: "Aprovador" },
  { id: 3, nome: "Admin" },
];

module.exports = { usuarios, perfis };
