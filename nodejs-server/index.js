const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "13f9b961-d858-4021-ab3e-d3018f3c46b6"}}
    );
    return res.status(r.status).json(r.data);
  }catch(e){
    // console.error("Error:", e.message);
    // return res.status(500).json({ error: "Internal Server Error" });
    return res.status(e.response.status).jason(e.response.data);
  }


  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);