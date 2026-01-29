
const express = require('express');
const axios = require('axios');
const cors = require('cors');

    const app = express();
    app.use(cors());
    const PORT = 6969;

    app.get ('/', (req, res) => {
        res.send (`
        <title>backend pokeaip :)</title>
      
        <p>Visita <a href ="/api/pokemon">/api/pokemon</a> para ver un Pokémon aleatorio.</p>
    `);


    })


    app.get('/api/pokemon', async (req, res) => {   

        try {
            const Pokerandom = Math.floor(Math.random() * 1025) + 1;
            const APIPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Pokerandom}`);
            const data = APIPoke.data;


            res.json({

            nombre: data.name[0].toUpperCase() + data.name.slice(1,),
            id: data.id,
            imagen: data.sprites.other['official-artwork'].front_default, 
            tipos: data.types.map(t => t.type.name),
            peso: data.weight / 10 
      
            });
        } catch (err) {
            res.status(500).json({ err: 'Error al obtener los datos del Pokémon' })
            console.error("error:", err.message);
    }
});

    app.use('/',(req,res) => {
        res.status(404).send ('<p>err 404. NOT FOUND </p>')

    });

    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });