var http = require('http');

var server = http.createServer(function(req, res){

    var categorias = req.url;

    if(categorias == '/moda'){
        res.end("<html><body>portal de moda</body><html>");
    }else if(categorias == '/tecnologia'){
        res.end("<html><body>portal de tecnologias</body><html>");
    }else if(categorias == '/beleza'){
        res.end("<html><body>portal de tecnologias</body><html>");
    }else{
        res.end("<html><body>portal de noticias</body><html>");
    }
})
server.listen(3000);