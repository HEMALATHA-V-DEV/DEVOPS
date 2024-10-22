const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./src/routes/index');

// Use routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
