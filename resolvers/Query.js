const { usuarios, perfis } = require("../data/db");
const { format } = require("date-fns");
module.exports = {
  ola() {
    return "Bom dia!";
  },
  rightTime() {
    return `${format(new Date(), "HH:mm")}`;
  },
  usuario() {
    return {
      id: 1,
      nome: "user teste",
      email: "abc@abc.com",
      idade: 29,
      salario: 1234.56,
      vip: true,
    };
  },
  produto() {
    return {
      nome: "Sabão",
      preco: 10.0,
      desconto: 5,
    };
  },
  megaSena() {
    const assign = (x, y) => x - y;
    let numeros = new Set();

    while (numeros.size < 6) {
      let numero = parseInt(Math.random() * 60 + 1);
      numeros.add(numero);
    }

    return Array.from(numeros).sort(assign);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const selection = usuarios.filter((n) => n.id === id);

    return selection ? selection[0] : null;
  },
  perfil(_, { id }) {
    const selection = perfis.filter((n) => n.id === id);

    return selection ? selection[0] : null;
  },
  perfis() {
    return perfis;
  },
};
