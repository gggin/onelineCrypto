# onelineCrypto
oneline code to encryt and decrypt for nodejs

support both browser and node

you can just webpack entry.js bundle.js --module-bind="json=json-loader"
then bundle.js can run in browser!!!
### utility

MD5
SHA256
encryptAES
decryptAES
easyEn
easyDe
RSA things

### Usage

```javascript

var md5 = require('oneline-crypto').MD5('123');
var sha = require('oneline-crypto').SHA256('123');
var re = require('oneline-crypto').easyEn('content', 'any password');
var content = require('oneline-crypto').easyDe(re, 'any password');
var re1 = require('oneline-crypto').encryptAES('content2', 'password length must be same with MD5(x).length');
var content2 = require('oneline-crypto').decryptAES(re1, 'any password');
```

### RSA

```javascript
var rsa = require('oneline-crypto').rsa;
rsa.keyGeneratorToFiles_('gggin', './pub.txt', './pri.txt');
var pub = rsa.loadPublicKeyFromFile_('./pub.txt');
var pri = rsa.loadPrivateKeyFromFile_('./pri.txt', 'gggin');
var result = rsa.encryptByPublicKey(pub, 'data content');
console.log(result);
var deResult = rsa.decryptByPrivateKey(pri, result);
console.log(deResult)
```
