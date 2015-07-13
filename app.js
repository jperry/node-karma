var app = require("express")();
var categoryController = require('./routes/categoryController');

app.get("/category", function(req, res) {
	categoryController.getCategory(function(data) {
		res.json(data);
	});
});

var port = 3000;
app.listen(port);
console.log("Listening on port " + port + "...");
