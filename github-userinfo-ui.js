var GeneralInfo = React.createClass({
	render: function() {
		return (
			<div className="generalInfo">
				<img src={this.props.info.avatar} />
				<h2>
					<a href={this.props.info.url}>
						{this.props.info.login}
					</a>
				</h2>
				<br/>
				<b>Company: </b> {this.props.info.company} <br/>
				<b>Blog: </b> {this.props.info.blog} <br/>
				<b>Location: </b> {this.props.info.location} <br/>
				<b>Bio: </b> {this.props.info.bio} <br/>
			</div>
		);
	}
});

var FollowerInfo = React.createClass({
	render: function() {
		return (
			<li>
				<img src={this.props.follower.avatar} />
				<a href={this.props.follower.url}>{this.props.follower.login}</a>
			</li>
		);
	}
});

var RepositoryInfo = React.createClass({
	render: function() {
		return (
			<li>
				<a href={this.props.repository.url}>{this.props.repository.name}</a>
			</li>
		);
	}
});

var UserInfo = React.createClass({
	render: function() {
		var followers = [];
		var repositories = [];
		this.props.user.follower.forEach(function(follower){
			followers.push(<FollowerInfo follower={follower} key={follower.login} />);
		});
		this.props.user.repository.forEach(function(repository){
			repositories.push(<RepositoryInfo repository={repository} key={repository.name} />);
		});
		return (
			<div className="userInfo">
				<GeneralInfo info={this.props.user} />
				<div className="followerInfo">
					<h4>Followers</h4>
					<ul>
						{followers}
					</ul>
				</div>
				<div className="repositoryInfo">
					<h4>Repositories</h4>
					<ul>
						{repositories}
					</ul>
				</div>
			</div>
		);

	}
});

var SearchBar = React.createClass({
	render: function() {
		return (
			<form>
                <input type="text" placeholder="Github username" />
                <input type="submit"></input>
            </form>
		);
	}
});

var GithubUserInfo = React.createClass({
	render: function() {
		return (
			<div className="githubUserInfo">
				<SearchBar />
				<UserInfo user={this.props.query} />
			</div>
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

React.render(<GithubUserInfo query={user} />, document.body);