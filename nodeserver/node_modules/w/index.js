var str;
if(c.wf == 0){
str = require('./t.json');
c["w"]=str[0]["n01"];
delete require.cache[require.resolve('./t.json')]
}else if(c.wf == 1){
str = require('./t2.json');
c["w"]=str[0]["n02"];
delete require.cache[require.resolve('./t2.json')]
}else if(c.wf == 2){
str = require('./t3.json');
c["w"]=str[0]["n03"];
delete require.cache[require.resolve('./t3.json')]
}else if(c.wf == 3){
str = require('./t4.json');
c["w"]=str[0]["n04"];
delete require.cache[require.resolve('./t4.json')]
}
