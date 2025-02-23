const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.json({ message: 'Liste de tous les produits' });
});


router.get('/we', (req, res) => {
    res.send('Réponse de la route /weather');
  });

module.exports = router;
