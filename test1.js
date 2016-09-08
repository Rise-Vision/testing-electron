describe("test", ()=>{
  it("tests", ()=>{
    return require("./gcs.js").getFileContents().then((resp)=>{
      console.log(resp.status);
    });
  });
});
