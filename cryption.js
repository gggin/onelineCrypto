var NodeRSA = require('node-rsa');
var fs = require('fs');
var cryp = require('./base')

var keyToStringInObject = function (key, password) {
    var pub = key.exportKey('public');
    var pri = key.exportKey();
    pub = pub.toString();
    pri = cryp.easyEn(pri.toString(), password);
    return { pub: pub, pri: pri };
}

var keyGeneratorToFiles_ = function (password, publicPath, privatePath) {
    var key = new NodeRSA({ b: 1024 });
    var o = keyToStringInObject(key, password);
    var pub = o.pub;
    var pri = o.pri;
    fs.writeFileSync(publicPath, pub);
    fs.writeFileSync(privatePath, pri);
};

var loadPrivateKeyFromFile_ = function (filePath, password) {
    var data = fs.readFileSync(filePath, 'utf8');
    return new NodeRSA(cryp.easyDe(data, password));
};

var loadPublicKeyFromFile_ = function (filePath) {
    var data = fs.readFileSync(filePath, 'utf8');
    return new NodeRSA(data.toString('utf8'));
};

//keyGeneratorToFiles_("123");

//var pkey = loadPrivateKeyFromFile_('./private.txt', '123');
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
    keyToStringInObject: keyToStringInObject,
    keyGeneratorToFiles_: keyGeneratorToFiles_,
    loadPrivateKeyFromFile_: loadPrivateKeyFromFile_,
    loadPublicKeyFromFile_: loadPublicKeyFromFile_,
    encryptByPublicKey:
        function (key, data) { return key.encrypt(data, 'base64'); },
    decryptByPrivateKey:
        function (key, data) { return key.decrypt(data, 'utf8'); }
}
