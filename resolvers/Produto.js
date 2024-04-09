module.exports = {
  precoCalculado(produto) {
    return parseFloat(
      produto.preco - produto.preco * (0.01 * produto.desconto)
    );
  },
  descontoCalculado(produto) {
    return parseFloat(produto.preco * (0.01 * produto.desconto));
  },
};
