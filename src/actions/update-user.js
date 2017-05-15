const bcrypt = require("bcrypt-nodejs"),
    user = require("../models").user;

module.exports = (userId, username, password) => {
    return user.findOne({
        where: {
            UserId: userId
        }
    }).then(result => {
        if(result === null){
            return {
                ok: false,
                message: 'The user does not exist.'
            };
        }
        result.update({
            Username: username,
            Password: bcrypt.hashSync(password)
        }).then(result => {
            return {
                ok: true,
                message: 'The user has been updated.'
            };
        });
    });
};