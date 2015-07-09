var api = require('octonode'); // github 3rd-party node.js api by pksunkara (https://github.com/pksunkara/octonode)
var token = '2e2e328dbd42f0650e446d1af84d9cb79c7235b9'; // user-generated token

// build client
var client = api.client(token);
client.get('/user', {}, function (err, status, data, headers) {
	if (err) console.error(err);
});

// specify the desired user to view his/her github info
var user = client.user(process.argv[2]);

// get user info
user.info(function (err, data, headers) {
	if (err) console.error(err);
	else {
		console.log("User info of " + process.argv[2]);
		console.log("Name: " + ((data.name !== "") ? data.name : "N/A"));
		console.log("Company: " + ((data.company !== "") ? data.company : "N/A"));
		console.log("Blog: " + ((data.blog !== "") ? data.blog : "N/A"));
		console.log("Location: " + ((data.location !== "") ? data.location : "N/A"));
		console.log("Bio: " + ((data.bio !== null) ? data.bio : "N/A"));
	}
});

// get user followers
user.followers(function (err, data, headers) {
	if (err) console.error(err);
	else {
		console.log("Followers of " + process.argv[2]);
		if (data.length == 0)
			console.log("This user doesn't have any followers.");
		else {
			for (var i = 0; i < data.length; i++) {
				console.log("Name: " + data[i].login);
				console.log("GitHub: " + data[i].html_url);
			}
		}
	}
});

//get user repositories
user.repos(function (err, data, headers) {
	if (err) console.error(err);
	else {
		console.log("Repositories of " + process.argv[2]);
		if (data.lenght == 0)
			console.log("This user doesn't have any repositories.");
		else {
			for (var i = 0; i < data.length; i++) {
				console.log("Name: " + data[i].full_name);
				console.log("GitHub: " + data[i].html_url);
			}
		}
	}
})