var cheerio = require("cheerio");
var server = require("./curl");
var iconv = require('iconv-lite');
 
function num(i){
    return  ()=>i;
}

//本版本为天极图片，天极图片极有规律
for(let i=2;i<6;i++){
    let url =`http://pic.yesky.com/17/256667017_${i}.shtml`;
    server.download(url, function(data) {
  if (data) {
   // console.log(data)
    var $ = cheerio.load(data);
    console.log(num(i)())
    $(".l_effect_img_mid img").each(function(a, e) {
    
      let name=$(e).attr("alt"),url=$(e).attr("src");
    //  console.log(name,url)
  //  console.log($(e).attr("class"))
   console.log(i);
   name="image"+i+0;
   console.log(name)
      server.downloadImage(url,name,"beauty")
    });
 
    console.log("done");
  } else {
      console.log("error");
  } 
});
}
