const core = require('@actions/');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello, ${nameToGreet}!`);
  core.setOutput('time', new Date().toTimeString());
} catch (error) {
  core.setFailed(error.message);
}


