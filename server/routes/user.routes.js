const LoginRegController = require('../contollers/loginReg.controller'),
    UserController = require('../contollers/user.controller'),
    {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post("/api/register", LoginRegController.register);
    app.post("/api/login", LoginRegController.login);
    app.get("/api/users", authenticate, UserController.index);
    app.get("/api/logout", authenticate, LoginRegController.logout);
    app.post("/api/allusers/chat", authenticate, UserController.index);
}