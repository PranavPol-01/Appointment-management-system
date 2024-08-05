const app = require("express");
const { makeSignupUser } = require("./routes/signup_route");
const router = app.Router();

const server = app();
const port = 5000

server.use('/api',makeSignupUser)


server.get('/',(req,res)=>{
    res.json({"message":"Server is running !!!"})
    console.log('Server is running !!!')
})


server.listen(port,() => {
  console.log("Server is running on port 5000");
});


