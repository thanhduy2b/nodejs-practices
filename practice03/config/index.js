var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + 
            ':' + configValues.pwd +
            '@ds011288.mlab.com:11288/nodetodo-practice03';
    }
};
