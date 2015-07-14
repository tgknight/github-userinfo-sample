var GeneralInfo = React.createClass({displayName: "GeneralInfo",
	render: function() {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "col-sm-4 col-xs-12"}, 
					React.createElement("img", {src: this.props.info.avatar, className: "img-circle", id: "user-avatar"})
				), 
				React.createElement("div", {className: "col-xs-12 col-sm-8"}, 
					React.createElement("h2", null, 
						React.createElement("a", {href: this.props.info.url}, this.props.info.login)
					), 
					React.createElement("br", null), 
					React.createElement("b", null, "Company: "), " ", this.props.info.company, " ", React.createElement("br", null), 
					React.createElement("b", null, "Blog: "), " ", React.createElement("a", {href: this.props.info.blog}, this.props.info.blog), " ", React.createElement("br", null), 
					React.createElement("b", null, "Location: "), " ", this.props.info.location, " ", React.createElement("br", null), 
					React.createElement("b", null, "Bio: "), " ", this.props.info.bio, " ", React.createElement("br", null)
				)
			)
		);
	}
});

var FollowerInfo = React.createClass({displayName: "FollowerInfo",
	render: function() {
		return (
			React.createElement("li", null, 
				React.createElement("img", {src: this.props.follower.avatar, className: "img-circle", id: "follower-avatar"}), 
				React.createElement("a", {href: this.props.follower.url}, this.props.follower.login)
			)
		);
	}
});

var RepositoryInfo = React.createClass({displayName: "RepositoryInfo",
	render: function() {
		return (
			React.createElement("li", null, 
				React.createElement("a", {href: this.props.repository.url}, this.props.repository.name)
			)
		);
	}
});

var UserInfo = React.createClass({displayName: "UserInfo",
	render: function() {
		var followers = [];
		var repositories = [];
		this.props.user.follower.forEach(function(follower){
			followers.push(React.createElement(FollowerInfo, {follower: follower, key: follower.login}));
		});
		this.props.user.repository.forEach(function(repository){
			repositories.push(React.createElement(RepositoryInfo, {repository: repository, key: repository.name}));
		});
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement(GeneralInfo, {info: this.props.user}), 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-xs-12 col-sm-4"}), 
					React.createElement("div", {className: "col-xs-12 col-sm-4"}, 
						React.createElement("h4", null, "Followers"), 
						React.createElement("ul", null, " ", followers, " ")
					), 
					React.createElement("div", {className: "col-xs-12 col-sm-4"}, 
						React.createElement("h4", null, "Repositories"), 
						React.createElement("ul", null, " ", repositories, " ")
					)
				)
			)
		);

	}
});

var SearchBar = React.createClass({displayName: "SearchBar",
	render: function() {
		return (
			React.createElement("div", {className: "row", id: "searchbar"}, 
				React.createElement("form", {className: "form-inline", role: "form"}, 
					React.createElement("div", {className: "form-group"}, 
						React.createElement("label", {className: "sr-only", htmlFor: "text"}), 
          		  		React.createElement("input", {type: "text", className: "form-control", placeholder: "Github username"}), 
						React.createElement("label", {className: "sr-only", htmlFor: "sumbit"}), 
        		  		React.createElement("input", {type: "submit", className: "btn btn-default btn-md", value: "SHOW"})
					)
				)
			)
		);
	}
});

var GithubUserInfo = React.createClass({displayName: "GithubUserInfo",
	render: function() {
		return (
			React.createElement("div", {className: "container", id: "githubUserInfo"}, 
				React.createElement(SearchBar, null), 
				React.createElement(UserInfo, {user: this.props.query})
			)
		);
	}
});

var user = {
	login: 'tgknight',
	url: 'http://github.com/tgknight',
	company: 'Taskworld',
	blog: 'http://kakera.thanapat.me',
	location: 'Bangkok, Thailand',
	bio: 'Thanapat Bhunnachet is the genius from season 5.',
	avatar: 'https://avatars.githubusercontent.com/u/6525347?v=3',
	follower: [
		{
			login: 'funasshi1',
			url: 'funasshi1',
			avatar: 'https://rumorscity.com/wp-content/uploads/line-sticker/0/0/3/1330/main.png'
		},
		{
			login: 'funasshi2',
			url: 'funasshi2',
			avatar: 'https://rumorscity.com/wp-content/uploads/line-sticker/0/0/3/1330/main.png'
		},
		{
			login: 'funasshi3',
			url: 'funasshi3',
			avatar: 'https://rumorscity.com/wp-content/uploads/line-sticker/0/0/3/1330/main.png'
			}
	],
	repository: [
		{
			name: 'taskworld1',
			url: 'taskworld1'
		},
		{
			name: 'taskworld2',
			url: 'taskworld2'
		}
	]
};

React.render(React.createElement(GithubUserInfo, {query: user}), document.body);