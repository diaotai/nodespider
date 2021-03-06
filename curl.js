var http = require("https");
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


function downloadImage(url,name,folder) {
  http.get(url,(res)=>{
    // console.log(,"body")
    console.log("下载图片",name)
    res.pipe(fs.createWriteStream(`./images/${folder}/${name}.jpg`))
  })
}

function saveData(data,name) {
     fs.appendFile(name,data,(err)=>{
      if(err) console.log(err);
    })
}

exports.download = download;
exports.downloadImage=downloadImage;
exports.saveData = saveData;