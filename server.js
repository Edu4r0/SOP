import express from 'express';
import process from 'process';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

let users = [];


app.get('/User', (req, res) => {
    const { name, status } = req.query;

    if (!name || !status) {
        return res.status(400).json({ error: 'Se requieren los parámetros "name" , "status" y "last".' });
    }

    const statusBool = status.toLowerCase() === 'true';
    const date = new Date();
    const lascontact = date.toLocaleString()
    // Buscar si el usuario ya existe en la lista
    const existingUser = users.find(user => user.name === name);

    if (existingUser) {
        existingUser.status = statusBool; // Actualizar el estado
        return res.json(existingUser);
    } else {
        const userData = {
            name,
            status: statusBool,
            last: lascontact
        };

        users.push(userData);
        return res.json(userData);
    }
});

app.get('/UsersList', (req, res) => {
    return res.json(users);
});

app.listen(PORT, () => {
    console.log(`Servidor API corriendo en el puerto ${PORT}`);
});
