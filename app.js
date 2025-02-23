const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteProduct = require('./router/router');
const cors = require('cors');
const User = require('./model/product');
const bcrypt = require('bcryptjs');
const openWeatherMapApiKey = '98e27698a730e36f558fc02c4f1dc7d7';
const axios = require('axios');



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Charbel:Charbel2004.@charbel.w7q8x.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connecté à la base de données réussie");
    })
    .catch((error) => {
        console.error("Erreur de connexion à la base de données:", error);
    });

app.post('/login', async (req, res) => {
    const nom = req.body.nom;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'This user already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ nom, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error while registering the user:", error);
        return res.status(500).json({ message: 'Error while registering' });
    }
});
app.use('/api/products/', RouteProduct);
module.exports = app;
