const network= require("rise-common-electron").network;

module.exports = {
  getFileContents() {
    //return require("node-fetch")("http://www.google.com");
    return network.httpFetch("http://www.google.com");
  }
};
