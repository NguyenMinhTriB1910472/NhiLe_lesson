const express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','./views');

app.listen(3000,function(){
    console.log('3000')
});

app.get('/',function(request,response){
    response.render('index',{
        name: 'bÉ TRÚY'
    });
});
var users= [
    {id: 1, name: 'Minh'},
    {id: 2, name: 'Thịnh'},
    {id: 3, name: 'Hưng'}
];
app.get('/users',function(request,response){
    console.log(users[1].name);
    response.render('users/index',{
        users:users
    });
});

app.get('/users/search',function(request,response){
    var q=request.query.name;
    var matchedUsers = users.filter(function(users){
        return users.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    });
    response.render('users/index',{
        users:matchedUsers
    });
});
app.get('/users/create',function(request,response){
    response.render('users/create');
});