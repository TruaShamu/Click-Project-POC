const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'clickevents.json'
);

const getProductsFromFile = cb => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
        
    });
}

module.exports = class Click {
    constructor() {
        this.date = Date();
        console.log("New click "+ this.date);
    }

    save() {
        getProductsFromFile(clicks => {
            clicks.push(this);
            fs.writeFile(p, JSON.stringify(clicks), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

}