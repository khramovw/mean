const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../environments/environment.dev');

// Аторизация пользавателя
module.exports.login = async function (req, res) {
    // Ищу пользавателя в базе по email
    const applicant = await User.findOne({email: req.body.email});
    if (applicant) {
        const passCorrect = bcript.compareSync(req.body.password, applicant.password)
        if (passCorrect) {
            const token = jwt.sign({
                email: applicant.email,
                id: applicant._id
            }, keys.jwt, {expiresIn: 60*60});

            res.status(200).json({
                message: 'Успішна авторізація.',
                token: `Bearer ${token}`
            });
        } else {
            res.status(401).json({
                message: 'Невірний пароль.'
            });
        }
    } else {
        res.status(404).json({
            message: 'Не знайдено користувача, спробуйте ще.'
        });
    }
}

// Регистраци нового пользавателя
module.exports.register = async function (req, res) {
    // Ищу пользавателя в базе по email
    const applicant = await User.findOne({email: req.body.email});
    if (applicant) {
        // Пользаватель с таким email уже существует
        res.status(409).json({
            message: 'Цей email вже існує, спробуйте іньший.'
        });

    } else {
        const salt = bcript.genSaltSync(10);
        // Создаю нового пользавателя
        const user = new User({
            email: req.body.email,
            password: bcript.hashSync(req.body.password, salt)
        });
        // Записіваю нового пользавателя в БД
        try {
            await user.save();
            res.status(201).json({
                message: 'Користувач успішно доданий.'
            });
        } catch (err) {
            res.status(400).json({
                message: 'Виникла помилка при доданні користувача, спробуйте ще.'
            });
        }

    }
}
