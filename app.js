const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
var item=[];
const app=express();

app.set("view engine",'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("home",{items:item});
});

app.post("/",function(req,res){
  const product=req.body.product;
  const cost=req.body.cost;
  var total=String(product +"   :   "+ cost);
  item.push(total);
  res.redirect("/");
});


app.post("/delete",function(req,res){
  var checkbox=req.body.checkbox;
  item.pop(checkbox);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("successfully connected");
});
