import { Router } from 'express';
const router =Router();
var port =3000

import { createPool } from 'mysql';
var db = createPool({
    host: 'localhost',
    user:'root',
    password: 'admin',
    database:'gtbt'
});
router.set("view engine","ejs");
router.set("views","../views/assets");

router.get("/",(req,res)=>{
    res.render("home");
});

const static_path = path.join(__dirname,"../src");
console.log(static_path);

router.post('/add',function(req,resp){
    resp.render("");
});
router.get('/facbook',function(req,resp){
    resp.send("https://www.facebook.com/tri.paipi/");
});
router.get('/github',function(req,resp){
    resp.render("https://github.com/minhtri228/lab_PTUD.git");
});
router.get('/instagram',function(req,resp){
    resp.render("https://www.instagram.com/trizuize/");
});
router.get('/skype',function(req,resp){
    resp.render("live:.cid.1815af92c0a0606b");
});

router.get('/',function(req,resp){
    resp.render("home");
});

router.get('/testconnect',function(req,res,next){
    if(db!=null){
        res.send("connect successful");
    } else{
        res.send('connect fail');
    }
});


router.listen(port,function(){
    console.log(port);
})
