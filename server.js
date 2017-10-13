const express = require("express"),
      router = require("./router/router"),
      host ="127.0.0.1";
      
let port = process.env.PORT || 3000;

const app = express();



// app.use("/", (req, res, next) => {
//     if(req.headers["x-forwarded-proto"] === "https"){
//        res.redirect("http://" + req.hostname + req.url);
//     }else{
//         next(); 
//     }
// })

app.use("/assets", express.static("public"));
app.use("/", router);



app.set("views", "./views");
app.set("view engine", "ejs");



let serverCallback = () => {
    console.log(`server is running on host ${host}:${port}`);
}



app.listen(port, serverCallback);

