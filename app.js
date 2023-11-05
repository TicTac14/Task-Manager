const express = require('express');
const app = express();
const PORT = 3000;
const taskRoutes = require('./routes/tasks.js');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// "/" route
app.use(express.static('public/Main Page'));
// routes

app.use('/api/v1/tasks', taskRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})
