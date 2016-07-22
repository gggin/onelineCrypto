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
//rsa.keyGeneratorToFiles_('gggin', './pub.txt', './pri.txt');
var pub = rsa.loadPublicKeyFromString(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCPWaaUFFrglic3gtsHwIjKIy1F
+ud9O0FXg7u6Fk9B08ktvreyPE+rwss7Fmin0wMEGdJJYI7/YAfe4aDepQfAvkhG
MFxvOCTHmQk4KtEIMS7W5p3IljYCsZyz4qom7LuDEUz9wEtEewhiLOIexhLBhWsH
WBMBqZhXVx+IBnGhEQIDAQAB
-----END PUBLIC KEY-----`);
var pri = rsa.loadPrivateKeyFromString(`hB5GAeOo1ld8oLgv3LTCrLP1jSpd9f2lToQhsJGRXKjjVEAiOkyTd6okx9I13+AAzPOxgFW5RCKJ4WdXY7FwMOt97qg9w7MwdHdBmkv4LNQLM3GhqHM0T3Fne9RvMjKopgaDytsbgQDGjuk47IXwnznvfiYn0ubLJrsmtpQ7u1aO5vK/+W/Q63dcgsm2ImfUaORdVN7EBknyKGQP81vaHTcxFxlh3HQB4BvUsG4J/cYtDjMdgRiEN84pzgGvZDbypdnC6Xep58ft8rL4Lv7o2BgdsWJ1S2Q1/GH4TpOsh0Mc4fEL8yP/ilc9EOKFh7q6wSd2ey1oznrcRafmoq+Qg+nN5/fgCmXqdYqV7D39EzprX0g6GmgE09hB//RlJLddhHtkwnrOQPOLbEQVoZlQY1QDYppHe1e+BEa9TtugkGmV6zM3u0PYRbX3oJ08tjXR8LiB20A+fBMj2oXWmL/UKkO8VolA8RP1Tbf1HAq7RzpZ6JNcpxj6/ALRC/GLEmqE8TFEv974/8tufzjScUBybY7aqBh+UU1IpFXT/TmqYK37xQINEZfzPA5fTJ2Km+5we1484Yir3GaGChj7BK1kpPj/o5mx5WUiR/16++VjByQajTQGJe3q1YBk7pAMcA6WlQfKosY2J4iySY/wfrcLVW7ktDb1PaXObXjoTU8sBm3Hdkyr0bDqBmmXh7dUiofUI/fw4I901vBT956TY2Cp2aZMmAsdTV3e6Qctw6sEJ8+DOBd3//ICcd4IWTInjsMKpkAjJEv6Ukg0UhmG/yoaVpV2W925If4nqFNFswr6458EV0ouKNCfyjgIw2puHqVvZbGDJsu5V++LqxuoLJqiCXICYwADRJrk7Ywaua880GGLQF786Ct84JtV4AlAuh9NUS43QLVkirNAbVU6maQdw4eSxrdSAtbgtvGrkgfxmb71osMo6B6JpFmK+oPH6Ezbu/68znFeTYJoOsx6OsPd/O0W1NV6XP2NkV6FrX4QKI+y0Hgf7u7eXEZoTnE9ZCMpy+ilZshQ1/wfweGkr9JhM/xKdqGgM+aU4fgeYD/dZaBn/fRN1mVzrU/Vi+qfF5KESSqP4fuL9bb7ctgFZAkGJysiZ7L2kXkns+xJflfo5IcG6Yr4XI+2vYDt7oDh9vuSjNMGLnc1+qkvSSwjJxw1zWKyaI5bzvfMPHSRKGVvoHw=`, 'gggin');
var result = rsa.encryptByPublicKey(pub, 'data content');
console.log(result);
var deResult = rsa.decryptByPrivateKey(pri, result);
console.log(deResult)



