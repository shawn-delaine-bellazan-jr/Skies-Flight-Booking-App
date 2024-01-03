const github = require('@actions/github');

const username = github.context.payload.pull_request.user.login;
const welcomeMessage = "Hello, @${username}";  // Replace with your branding or logo message

console.log(welcomeMessage);
