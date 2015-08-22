var express = require('express');
var app = express();
var falcor = require('falcor');
var falcorExpress = require('falcor-express');

// Handy factory methods
var $ref = falcor.Model.ref;
var $atom = falcor.Model.atom;
var $error = falcor.Model.error;

var model = new falcor.Model({
	cache: {
		titlesById: {
			234: {
				name: "House of Cards",
				rating: $atom(5),
				bookmark: $error("Something went wrong")
			}
		},
		genreList: [
			{
				name: "Recently Watched",
				titles: [
					$ref("titlesById[234]")
				]
			},
			{
				name: "New Releases",
				titles: [
					$ref("titlesById[234]")
				]
			}
		]
	}
});

app.use(express.static("."));
app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res){
	// data source
	return model.asDataSource();
}));
app.listen(9090);

console.log("Navigate to http://localhost:9090");
