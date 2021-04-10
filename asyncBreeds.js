const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunc) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) return callbackFunc(undefined);

    console.log("In readFile's Callback: it has the data.");

    callbackFunc(data);
  });
};

const printCatBreed = breed => {
  console.log('Return Value: ', breed);
};

// breedDetailsFromFile('Saphire', printCatBreed);

module.exports = { breedDetailsFromFile };