const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'The breed does not exist');
    } else {
      callback(null, data[0]['description']);
    }
  });
}

module.exports = fetchBreedDescription;