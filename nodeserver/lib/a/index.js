var str;
if (c.af == 0) {
str = require('./t.json');
    c["a"] = str[0]["n01"];
delete require.cache[require.resolve('./t.json')]
} else {
str = require('./t2.json');
    c["a"] = str[0]["n02"];
delete require.cache[require.resolve('./t2.json')]
}
