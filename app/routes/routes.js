module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        // CREATE route
        console.log(req.body);
        res.send('Hello');
    });
};
