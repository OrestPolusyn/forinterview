const si = require('systeminformation');

const deviceBrand = si.system(function(data) {
    console.log('Device: ' + data.manufacturer);
})

