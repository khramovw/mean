const passport = require('passport-jwt')
const JwtStrategy = passport.Strategy;
const ExtractJwt = passport.ExtractJwt;
const mongoose = require('mongoose');
const Users = mongoose.model('users');
const keys = require('../environments/environment.dev');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(new JwtStrategy(options, async (payload, done) => {
        try {
            const user = await Users.findById(payload.id).select('email id');
            user ? done(null, user) : done(null, false);
        } catch (err) {
            done(null, false);
            console.log(err);
        }

    }));
}
