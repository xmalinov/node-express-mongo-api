module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        // CREATE route
        res.send('Hello');
    });
};