const app = require("express");
const server = app();
const port = 5000


server.get('/',(req,res)=>{
    res.json({"message":"Server is running !!!"})
    console.log('Server is running !!!')
})


server.listen(port,() => {
  console.log("Server is running on port 5000");
});


