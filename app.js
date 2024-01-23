const express = require('express');
const app = express();
const routes = require('./routes/homeRoutes');

app.set('view engine', 'pug');
app.set('views', 'vieІws');

app.use('/', routes);
const PORT = 3400;
app.listen(PORT, () => {
    console.log('Server is vrunning on http://localhost:${PORT}');
});