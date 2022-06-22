const Click = require('../models/click');
exports.getAddClick = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Add Click',
        path: '/'
    })
};


exports.postAddClick = (req, res, next) => {
    const date = Date.now();
    const click = new Click(date);
    click.save();
    res.redirect("/");
}

exports.getClicks = (req, res, next) => {
    Click.fetchAll((clicks) => {
        res.render('clicks', {
        clicks: clicks,
        pageTitle: 'Clicks'
    });
    });
}