const express = require('express');
const dontenv = require("dotenv");
const usersRouter = require("./routes/user")
const proprietesRouter = require("./routes/propriete")
dontenv.config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send("COUOCUOCUO")
})

app.use("/users", usersRouter);
app.use("/proprietes", proprietesRouter);

app.listen(PORT, ()=>{
    console.log(`le server a démarré sur le port ${PORT}`)
})