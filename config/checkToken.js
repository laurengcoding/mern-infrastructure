const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // check for the token being sent in a header or as a query param
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        // remove 'Bearer '' if it was included in the token header
        token = token.replace('Bearer ', '');
        // check if token is valid and not expired
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            // if valid token, decoded will be the token's entire payload
            // if invalid token, err will be set
            req.user = err ? null : decoded.user;
            req.exp = err ? null : new Date(decoded.exp * 1000);
            return next();
        });
    } else {
        // no token was sent
        req.user = null;
        return next();
    }
};