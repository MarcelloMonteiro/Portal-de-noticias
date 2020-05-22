function NoticiasDAO(conexao){
    this._conexao = conexao;

}
NoticiasDAO.prototype.getNoticias = function(funcao){
    this._conexao.query('select * from noticias',funcao)
};
NoticiasDAO.prototype.getNoticia = function(funcao){
    this._conexao.query('select * from noticias where id_noticias = 2', funcao)
}
NoticiasDAO.prototype.salvarNoticia = function(noticia, funcao){
    this._conexao.query('insert into noticias set ?', noticia, funcao)
}

module.exports = function(){
    return NoticiasDAO;
}