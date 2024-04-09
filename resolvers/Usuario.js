module.exports = {
  perfil(usuario) {
    const sels = perfis.filter((n) => n.id === usuario.perfil_id);
    return sels ? sels[0] : null;
  },
};
