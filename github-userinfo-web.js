var github = require('octonode'); // github 3rd-party node.js api by pksunkara (https://github.com/pksunkara/octonode)
var token = '035ad9db4fae733053362474db2054846edbdcc6'; // user-generated token

// build client
var client = github.client();
client.get('/users/tgknight', {}, function (err, status, data, headers) {
	if (err) console.error("buildclienterr" + err);
});

// specify the desired user to view his/her github info
var loginid = 'tgknight';
var user = client.user(loginid);

// get user info
user.info(function (err, data, headers) {
	if (err) console.error("userinfoerr: " + err);
	else {
		console.log("User info of " + loginid);
		console.log("Name: " + ((data.name !== "") ? data.name : "N/A"));
		console.log("Company: " + ((data.company !== "") ? data.company : "N/A"));
		console.log("Blog: " + ((data.blog !== "") ? data.blog : "N/A"));
		console.log("Location: " + ((data.location !== "") ? data.location : "N/A"));
		console.log("Bio: " + ((data.bio !== null) ? data.bio : "N/A"));
	}
});

// get user followers
user.followers(function (err, data, headers) {
	if (err) console.error("followererr: " + err);
	else {
		console.log("Followers of " + loginid);
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
	if (err) console.error("repoerr: " + err);
	else {
		console.log("Repositories of " + loginid);
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