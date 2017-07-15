var cheerio = require("cheerio");
var server = require("./curl");
var iconv = require('iconv-lite');
 
//var url = "http://www.iqiyi.com/"
var url = "http://www.iqiyi.com/a_19rrh9vl6t.html";
server.download(url, function(data) {
  if (data) {
    //console.log(data);
 //site-piclist site-piclist-11665
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