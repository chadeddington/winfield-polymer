module.exports = function(req, res, next) {
	// Query the database for all clients
	//
	//respond with the clients list
	var sample = [
		{
			"title": "Call Stacy",
			"details": "Call Stacy at 555-STCY"
		},
		{
			"title": "Email Jason",
			"details": "Jason said he a lead, follow up!"
		}
	];
	return res.json(sample);
}