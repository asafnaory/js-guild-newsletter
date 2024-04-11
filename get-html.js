import fs from 'fs';
import axios from 'axios';

axios.get('http://localhost:4321/')
    .then(response => {
        fs.writeFileSync('output.html', response.data);
    })
    .catch(error => {
        console.error(error);
    });