var axios = require("axios");
require("dotenv").config();
const api = {}
module.exports = api;



//function to make api call to github api
function userName(username){
    axios.get(`https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`)
    .catch(err=>{
        console.log("new user");
        process.exit(1);
    }).then(res=>{
        console.log(res.data)
    })
}// userName("lilsakabighurt")

//api call to get number of stars//
function stars(username){
    axios.get(`https://api.github.com/users/${username}/repos?client_id=${
        process.env.CLIENT_ID
      }&client_secret=${process.env.CLIENT_SECRET}&per_page=100`)
      .catch(err=>{
          console.log("no stars bruh");
          process.exit(1);
      }).then(res=>{
        console.log(res);
      })
} stars("lilsakabighurt");