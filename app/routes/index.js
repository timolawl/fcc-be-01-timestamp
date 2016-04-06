'use strict';

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var unixDate, naturalDate;

function parseUnix(unix) {
    var natural = new Date(unix * 1000);

    return month[natural.getUTCMonth()] + ' ' + natural.getUTCDate() + ', ' + natural.getUTCFullYear();
}

module.exports = function(app) {
    app.route('/')
        .get(function(req, res) {
            res.sendFile(__dirname + '/index');
        });

    app.get(/^\/\d{1,10}$/, function(req, res) {
        unixDate = +req.url.slice(1);
        naturalDate = parseUnix(unixDate);
        res.json({ unix: unixDate, natural: naturalDate });
    });

    app.get(/^\/[a-zA-Z]+%20\d{1,2},%20\d{4}$/, function(req, res) {
        unixDate = Date.parse(req.url.slice(1).replace(/%20/g, ' ') + ' UTC')/1000;
        if (!isNaN(unixDate)) {
            naturalDate = parseUnix(unixDate);
        }
        else {
            unixDate = null;
            naturalDate = null;
        }

        res.json({ unix: unixDate, natural: naturalDate });
    });


    app.use(function(req, res) {
        res.json({ unix: null, natural: null });
    });

};
