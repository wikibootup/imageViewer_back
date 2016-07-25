var request = require("request");
var base_url = "http://localhost:8000/";

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(error, response, body) {
      });
    });
  });
});

