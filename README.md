# onelineCrypto
oneline code to encryt and decrypt for nodejs

### utility

MD5
SHA256
encryptAES
decryptAES
easyEn
easyDe

### Usage

```javascript

var md5 = require('oneline-crypto').MD5('123');
var sha = require('oneline-crypto').SHA256('123');
var re = require('oneline-crypto').easyEn('content', 'any password');
var content = require('oneline-crypto').easyDe(re, 'any password');
var re1 = require('oneline-crypto').encryptAES('content2', 'password length must be same with MD5(x).length');
var content2 = require('oneline-crypto').decryptAES(re1, 'any password');
```
