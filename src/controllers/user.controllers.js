
import { User } from '../models/user.models.js';

// create new user
export async function createUser(req, res) {
    try {
        const nuevoUsuario = await User.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//get all users
export async function getUser(req, res) {
    try {
        const usuarios = await User.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//get user by id
export async function getUserId(req, res) {
    const { id } = req.params;
    try {
        const usuario = await User.findByPk(id);
        if (!usuario) {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        } else {
            res.status(200).json(usuario);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a user
export async function UpdateUser(req, res) {
    const { id } = req.params;
    try {
        const [updatedRowsCount] = await User.update(req.body, {
            where: { id },
        });
        if (updatedRowsCount === 0) {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        } else {
            res.status(200).json({ mensaje: 'Usuario actualizado correctamente' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a user
export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const deletedRowCount = await User.destroy({
            where: { id },
        });
        if (deletedRowCount === 0) {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        } else {
            res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
