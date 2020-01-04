const axios = require('axios');

const url = 'https://expressjs.com/en/starter/generator.html';

axios(url)
    .then((response) => {
        const html = response.data;
        console.log(html);
    })
    .catch(console.error);