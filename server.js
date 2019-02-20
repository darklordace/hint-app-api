const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const unlock = require('./controllers/unlock');
const getHints = require('./controllers/getHints');

// GLOBAL VARIABLES
const app = express();

const DEBUG = true;

const PORT = process.env.PORT || 3001;

const db = [
    {
        hintId: '1728493849',
        token: 'e91jeosl1m2k34jaus8',
        canUnlock: true,
        hintDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin blandit laoreet. Ut faucibus odio lorem, ut faucibus justo condimentum a. Nulla vitae aliquet purus, sollicitudin sodales arcu.'
    },
    {
        hintId: '9573817382',
        token: 'ka02m391ur18138r138',
        canUnlock: true,
        hintDesc: 'Integer a orci eu justo bibendum venenatis. Nunc lacinia turpis sed mi tristique, quis pharetra leo imperdiet. Cras egestas ut nulla nec lobortis. Pellentesque id urna pharetra, auctor nunc et, semper ipsum. Sed ac dolor lectus. Quisque sed tristique leo, a mattis lacus. Suspendisse vehicula porttitor sapien, vel hendrerit sapien molestie eget.'
    },
    {
        hintId: '5813271281',
        token: 'm12381x23x23x713m2x',
        canUnlock: true,
        hintDesc: 'quis pharetra leo imperdiet. Cras egestas ut nulla nec lobortis. Pellentesque id urna pharetra, auctor nunc et, semper ipsum. Sed ac dolor lectus. Quisque sed tristique leo, a mattis lacus. Suspendisse vehicula porttitor sapien, vel hendrerit sapien molestie eget.'
    },
    {
        hintId: '3991323138',
        token: 'a07dn212sn1sn172172',
        canUnlock: true,
        hintDesc: 'Donec venenatis dignissim fermentum. Curabitur lacus erat, porta eu risus in, viverra dapibus nulla. Vestibulum porttitor odio dapibus sem sagittis fermentum. Nunc in porttitor tellus. Ut mattis augue at elementum scelerisque. Sed nunc odio, volutpat sed vulputate id, rutrum vel sem. Aliquam erat volutpat. Fusce tellus nibh, fringilla a rhoncus in, interdum vitae ipsum. Duis volutpat libero vel eros suscipit aliquet ut vitae turpis. Nulla blandit faucibus egestas.'
    }
]
// --

// MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
// --

// For Debugging only
if (DEBUG) {
    app.get('/', (req, res) => {
        res.send('Hello World')
    });
}
// --

// ROUTING
app.post('/unlock', unlock.handleUnlock(db));
app.post('/gethints', getHints.handleGetHints(db));
// --

// START SERVER
app.listen(PORT, () => {
	console.log(`app is running on port ${PORT}`);
});