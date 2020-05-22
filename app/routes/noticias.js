//var db = require('../../config/db');

module.exports = function(app){


    app.get('/noticias', function(req, res){

        var conexao = app.config.db();
        var noticiasModels = new app.app.models.NoticiasDAO(conexao);

        noticiasModels.getNoticias(function(error, result){
            res.render('noticias/noticias', {noticias:result})
        })
    
    
        //res.render("noticias/noticias")
    });
    
}