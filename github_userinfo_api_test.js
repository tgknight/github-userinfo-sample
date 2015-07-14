var github_userinfo = require('./github_userinfo_api');

github_userinfo.getUserInfo('tgknight');
console.log(github_userinfo.readUserInfo());