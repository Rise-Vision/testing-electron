module.exports = {
  getFileContents() {
    return require("node-fetch")("http://www.google.com");
  }
};
