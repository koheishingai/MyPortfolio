var str;
if(c.rf == 0){
var str = require('./t.json');
c["r"]=str[0]["n01"];
delete require.cache[require.resolve('./t.json')]
}else if(c.rf == 1){
var str = require('./t2.json');
c["r"]=str[0]["n02"];
delete require.cache[require.resolve('./t2.json')]
}else if(c.rf == 2){
var str = require('./t3.json');
c["r"]=str[0]["n02"];
delete require.cache[require.resolve('./t3.json')]
}
