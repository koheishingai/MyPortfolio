var str;
if(c.cf == 0){
str = require('./t.json');
c["c"]=str[0]["n01"];
delete require.cache[require.resolve('./t.json')]
}else if(c.cf == 1){
str = require('./t2.json');
c["c"]=str[0]["n02"];
delete require.cache[require.resolve('./t2.json')]
}else if(c.cf == 2){
str = require('./t3.json');
c["c"]=str[0]["n03"];
delete require.cache[require.resolve('./t3.json')]
}else if(c.cf == 3){
str = require('./t4.json');
c["c"]=str[0]["n03"];
delete require.cache[require.resolve('./t4.json')]
}
