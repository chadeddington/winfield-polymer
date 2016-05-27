module.exports = function(req, res, next) {
	// Query the database for all clients
	//
	//respond with the clients list
	var sample = [
		{
			"first-name": "John",
			"last-name": "Deer"
		},
		{
			"first-name": "Jane",
			"last-name": "Doe"
		}
	];
	return res.json(sample);
}