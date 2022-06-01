const app = require("./app");
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Your express listen at local host ${PORT}`);
})