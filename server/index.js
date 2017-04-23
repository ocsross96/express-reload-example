const express = require('express');
const path = require('path');

const config = require('./config');
const nunjucksConfig = require('./nunjucksConfig');

const app = express();

app.set('view engine', 'njk');
nunjucksConfig.setup(app);

app.use('/build', express.static(path.join(__dirname, '../build')));

const indexRoute = require('./routers/index.route');
app.use('/', indexRoute);

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

app.listen(config.server.port, () => console.log(`Running on http://localhost:${config.server.port}`));
