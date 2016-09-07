return require("node-fetch")("http://www.google.com").then((resp)=>{
  console.log(resp.status);
  require("electron").app.quit();
});
