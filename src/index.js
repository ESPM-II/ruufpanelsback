const express = require('express');
const cors = require('cors');
const app = express();
const panelsRoutes = require('./routes/panelsRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/panels', panelsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El server está corriendo en el puerto ${PORT}`)
});