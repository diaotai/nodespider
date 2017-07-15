var http = require("http");
var fs = require('fs');
 
// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
  console.log("hello world")
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}

function downloadImage(url,name,callback) {
  http.get(url,(res)=>{
   // console.log(res.body,"body")
    fs.writeFile(`./images/${name}.jpg`,res.body,(err)=>{
      if(err) console.log(err);
      else console.log(`下载图片${name}`)
    })
  })
}

exports.download = download;
exports.downloadImage=downloadImage;