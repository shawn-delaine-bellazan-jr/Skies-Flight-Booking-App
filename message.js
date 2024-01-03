const github = require('@actions/github');
const TOKEN = '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'

const octokit = github.getOctokit(TOKEN);

async function welcomeUser() {
  const { owner, repo, number } = github.context.issue;
  const username = github.context.payload.pull_request.user.login;

  const welcomeMessage = `👋 Welcome, @${username}! Thanks for opening this pull request. We appreciate your contribution! 🚀`;

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: number,
    body: welcomeMessage,
  });
}

welcomeUser();
