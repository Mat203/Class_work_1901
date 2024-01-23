const express = require('express');
const app = express();
const routes = require('./routes/homeRoutes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', routes);
const PORT = 3400;
app.listen(PORT, () => {
    console.log('Server i srunning on http://localhost:${PORT}');
});