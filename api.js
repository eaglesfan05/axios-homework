var axios = require("axios");
require("dotenv").config();
const api = {}
module.exports = api;



//function to make api call to github
function userName(username){
    axios.get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    .catch(err=>{
        console.log("new user");
        process.exit(1);
    }).then(res=>{
        console.log(res.data)
    })
} userName("lilsakabighurt")