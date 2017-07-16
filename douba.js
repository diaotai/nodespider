var cheerio = require("cheerio");
var server = require("./curl");
var iconv = require('iconv-lite');
var fs = require("fs");
 
//豆瓣1984书评（注意爬去频率，太夸张会被封ip） 
for(let i=1;i<20;i++){
  setTimeout(()=>{
     let url =`https://book.douban.com/subject/4820710/comments/hot?p=${i}`;
    server.download(url, function(data) {
  if (data) {
    console.log("page"+i)
    var $ = cheerio.load(data);
    $(".comment p").each(function(a, e) {
    
    let data = $(e).text()+"\n-----------------------------------------------\n"
    //  console.log(name,url)
    console.log(data)
    server.saveData(data,"./1984.txt")
    
    });
  
    console.log("done");
  } else {
      console.log("error");
  } 
});
  },i*500)
 
}
