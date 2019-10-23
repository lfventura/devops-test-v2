const cities = require('cities');
const url = require('url');
const http = require('http');
const app = http.createServer((request, response) => {
  var city, query;
  query = url.parse(request.url, true).query;
  if (query.zipCode) {
     if (cities.zip_lookup(query.zipCode)){
       city = cities.zip_lookup(query.zipCode).city;
     }
     else {
       city = "not found"
     }
  }
  else {
    city = "not found"
  }
  console.log("1 " + query.zipCode)
  console.log("2 " + city)
  console.log("3 " + cities.zip_lookup(query.zipCode))
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`<h1>The city you are in is ${city} <h1>`);
  response.end();
});

app.listen(3000);
