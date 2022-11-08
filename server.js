const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    try {
          console.log('connected to the get route');
					res.status(200).send({
						success: true,
					});
    } catch (error) {
        console.log('in cath block',error)
    }
  
    
})

app.listen(3000, () => {
    console.log("server started");
})

