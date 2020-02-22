var Parse = require('parse');

const initParse = function(appId, serverURL){
    Parse.initialize(appId);
    Parse.serverURL = serverURL;
}

export {
    initParse
}
