const demoA = require('./demoA');
const demoB = require('./demoB');
module.exports = {
    state: {
        name: 'store'
    },
    modules: {
        demoA,
        demoB
    }
}
