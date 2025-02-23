const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteProduct = require('./router/router');
const cors = require('cors');
const User = require('./model/product'); // Assurez-vous que le chemin d'accès est correct pour le modèle User
const bcrypt = require('bcryptjs');
const openWeatherMapApiKey = '98e27698a730e36f558fc02c4f1dc7d7';
const axios = require('axios'); // Ajoutez cette ligne pour importer axios




app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
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
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'This user already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database with the hashed password
        const newUser = new User({ nom, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error while registering the user:", error);
        return res.status(500).json({ message: 'Error while registering' });
    }
});// Utilisation des routes définies dans ./router/router pour /api/products/

app.use('/api/products/', RouteProduct);
module.exports = app;
