var fs = require('fs');
var github = require('octonode'); // github 3rd-party node.js api by pksunkara (https://github.com/pksunkara/octonode)

var storeUserInfo = function(data, loginid) {
	fs.writeFile("user.json", JSON.stringify(data), function(err) {
		if (err) console.error("file i/o err: " + err);
		console.log("userinfo of " + loginid + " has been successfully retrieved.");
	});
}

var readUserInfo = function() {
	return JSON.parse(fs.readFileSync("user.json", 'utf8'));
}

var getUserInfo = function(loginid) {
	// build client
	var client = github.client();

	// specify the desired user to view his/her github info
	var user = client.user(loginid);
	var userinfo = {};
	
	// get user info
	user.info(function(err, data, headers) {
		if (err) console.error("userinfoerr: " + err);
		else {
			userinfo.login = loginid;
			userinfo.company = ((data.company !== "") ? data.company : "N/A");
			userinfo.blog = ((data.blog !== "") ? data.blog : "N/A");
			userinfo.location = ((data.location !== "") ? data.location : "N/A");
			userinfo.bio = ((data.bio !== null) ? data.bio : "N/A");
			userinfo.avatar = data.avatar_url;
		}
		storeUserInfo(userinfo, loginid);
	});

	// get user followers
	user.followers(function(err, data, headers) {
		if (err) console.error("followererr: " + err);
		else {
			userinfo.follower = [];
			for (var i = 0; i < data.length; i++) {
				var follower = {};
				follower.login = data[i].login;
				follower.url = data[i].html_url;
				follower.avatar = data[i].avatar_url;
				userinfo.follower.push(follower);

			}
		}
		storeUserInfo(userinfo, loginid);
	});

	//get user repositories
	user.repos(function(err, data, headers) {
		if (err) console.error("repoerr: " + err);
		else {
			userinfo.repository = [];
			var max = ((data.length < 5) ? data.length : 5);
			for (var i = 0; i < max; i++) {
				var repository = {};
				repository.name = data[i].full_name;
				repository.url = data[i].html_url;
				userinfo.repository.push(repository);
			}
		}
		storeUserInfo(userinfo, loginid);
	});
}

module.exports.storeUserInfo = storeUserInfo;
module.exports.readUserInfo = readUserInfo;
module.exports.getUserInfo = getUserInfo;