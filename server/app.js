const express = require("express");
const path = require("path");

const app = express();
const staticPath = path.join(__dirname, "../static");
const publicFile = path.join(__dirname,"../public")



app.use( express.static(staticPath )  );
app.use(express.static(publicFile))


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../static", "index.html"));
   
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));