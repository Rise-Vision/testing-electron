return require("./gcs.js").getFileContents().then((resp)=>{
  console.log(resp.status);
  require("electron").app.quit();
});
