/**
 * Created by fm369 on 6/4/2016.
 */

var lib = require('./index');

var SHA256 = lib.SHA256;

var MD5 = lib.MD5;

var encryptAES = lib.encryptAES;

var decryptAES = lib.decryptAES;

var test = encryptAES('我是中国人123', MD5("123"));
var result = lib.decryptAES(test, MD5("123"));
console.log(test, result);
console.log(SHA256('我是中国人'));

var rsa = lib.rsa;
rsa.keyGeneratorToFiles_('gggin', './pub.txt', './pri.txt');
var pub = rsa.loadPublicKeyFromFile_('./pub.txt');
var pri = rsa.loadPrivateKeyFromFile_('./pri.txt', 'gggin');
var result = rsa.encryptByPublicKey(pub, 'data content');
console.log(result);
var deResult = rsa.decryptByPrivateKey(pri, result);
console.log(deResult)



