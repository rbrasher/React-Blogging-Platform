/**
 * Created by ron on 4/10/2015.
 */
var Dispatcher = require('flux').Dispatcher,
    AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

module.exports = AppDispatcher;