This repo is for standing up a simple node server which is helpful for testing different connector builder scenarios.

I've included several `data_X.json` files for simluating small, medium, and large requests.

To test with the different files, set the first line of `index.js` to the name of the file, e.g:
```
const data = require('./data_8750_records.json')
```

To run the server, first [install node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), then in this root directory run:
```
npm install
```
then
```
nodemon index.js
```

This will start the server which will listen to changes on index.js, so to switch between the `data_X.json` files, just modify index.js and save the file, and the server will restart.