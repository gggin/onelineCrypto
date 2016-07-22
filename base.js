var crypto = require('crypto');

function decryption(data, key) {
    if (!key) throw "empty key!";
    var iv = "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
    decipher.setAutoPadding(true);

    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));

    return cipherChunks.join('');
}

function encryption(data, key) {
    if (!key) throw "empty key!";
    var iv = "";
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createCipheriv('aes-256-ecb', key, iv);
    decipher.setAutoPadding(true);

    cipherChunks.push(decipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(decipher.final(cipherEncoding));

    return cipherChunks.join('');
}

//var key = "c576086a1d6191202487a94d47a32d1a";
//var result = decryption(encryption("123456", key), key);
//console.log(result);
//var t1 = "123456" == decryption("Ck1moEv5Mvpg2gneUsCzjQ==", "c576086a1d6191202487a94d47a32d1a")
//var t2 = "123456" == hello.hello('5Et6B0WmXcKLwG2gixd2qw==');

//console.log(t1 && t2);

var SHA256 = function (str) {
    var crypto = require('crypto');
    var file1_sha256 = crypto.createHash('sha256');
    file1_sha256.update(str, 'utf8');
    return file1_sha256.digest('hex');
};

var MD5 = function (str) {
    var crypto = require('crypto');
    var file1_sha256 = crypto.createHash('md5');
    file1_sha256.update(str, 'utf8');
    return file1_sha256.digest('hex');
};

var easyEn = function(str, password) {
    var md5 = MD5(password);
    return encryption(str, md5);
};

var easyDe = function(str, password) {
    var md5 = MD5(password);
    return decryption(str, md5);
};

module.exports = {
    decryptAES :  decryption,
    encryptAES :  encryption,
    SHA256 : SHA256,
    MD5 : MD5,
    easyEn : easyEn,
    easyDe : easyDe,
};
