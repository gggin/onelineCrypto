var NodeRSA = require('node-rsa');
var cryp = require("oneline-crypto");
var fs = require('fs');

var keyGeneratorToFiles_ = function(password) {
    var key = new NodeRSA({b: 1024});
    var pub = key.exportKey('public');
    var pri = key.exportKey();
    pub = pub.toString();
    pri = cryp.easyEn(pri.toString(), password);
    fs.writeFileSync("./public.txt", pub);
    fs.writeFileSync("./private.txt", pri);
};

var loadPrivateKeyFromFile_ = function(filePath, password) {
    var data = fs.readFileSync(filePath, 'utf8');
    return new NodeRSA(cryp.easyDe(data, password));
};

var loadPublicKeyFromFile_ = function(filePath, password) {
    var data = fs.readFileSync(filePath, 'utf8');
    return new NodeRSA(data.toString('utf8'));
};

//keyGeneratorToFiles_("123");

var pkey = loadPrivateKeyFromFile_('./private.txt', '123');
//var key = loadPublicKeyFromFile_('./public.txt');
/*
var moment = require('moment');
console.log(moment().format());
var tt = key.encrypt('test123', 'base64');
console.log(tt);
console.log(moment().format());
console.log(pkey.decrypt(tt, 'utf8'));
console.log(moment().format());
*/
module.exports = {
    encrypt: function(data) {return pkey.encrypt(data, 'base64')}
}
