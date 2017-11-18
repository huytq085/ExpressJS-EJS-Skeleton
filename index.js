var express = require('express');
var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './views');

var server = require('http').Server(app);
server.listen(process.env.PORT || 3000, function(){
  console.log('listening on ', server.address().port);
});
app.get('/', function (req, res) {
    res.render('index');
    // res.send('abc');
});