const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log("error", error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('BREED DOESNOT EXIST');
  } else {
    console.log(data[0]['description']);
    console.log(typeof data);
  }
});