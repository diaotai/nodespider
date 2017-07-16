var cheerio = require("cheerio");
var server = require("./curl");
var iconv = require('iconv-lite');
 
//本版本为爬去爱奇艺
var url = "http://www.iqiyi.com/a_19rrh9vl6t.html";
server.download(url, function(data) {
  if (data) {
    var $ = cheerio.load(data);
    $(".site-piclist_pic_link img").each(function(i, e) {
      //  console.log(i)
      //  var buffer = new Buffer($(e).attr("data-name"),'binary')
      //  console.log($(e).attr("value"),"fh");
      let name=$(e).attr("alt"),url=$(e).attr("src");
      console.log(name,url)
      server.downloadImage(url,name)
    });
 
    console.log("done");
  } else {
      console.log("error");
  } 
});