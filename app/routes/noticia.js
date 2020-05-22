module.exports = function(app){


    app.get('/noticia', function(req, res){

        var conexao = app.config.db();

        var noticiasModels = new app.app.models.NoticiasDAO(conexao);
        noticiasModels.getNoticias(function(error, result){
            res.render('noticias/noticia', {noticia:result})
        })
    
        //res.render("noticias/noticias")
    });
    
}