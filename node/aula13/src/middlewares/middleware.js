module.exports = (req, res, next) => {
    if(req.body && req.body.cliente) {
        console.log(`Vi que você postou ${req.body.cliente}`);
    }

    next();
};