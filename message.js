const github = require('@actions/github');

const token = process.env.GITHUB_TOKEN;
const octokit = github.getOctokit(token);

async function welcomeUser() {
  const { owner, repo, number } = github.context.issue;
  const username = github.context.payload.pull_request.user.login;

  const welcomeMessage = `👋 Welcome, @${username}! 🚀`;

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: number,
    body: welcomeMessage,
  });
}

welcomeUser();
