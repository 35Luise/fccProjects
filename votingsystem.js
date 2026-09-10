const poll = new Map();
// Poll options
function addOption(option) {
  if (option === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  } 
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
} 
// Voting logic
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// Add three poll options
addOption("Turkey");
addOption("Turkey");
addOption("Morocco");
addOption("Spain");
// Votes
vote("Turkey", 101);
vote("Morocco", 102);
vote("Turkey", 103);

function displayResults() {
  let results = "Poll Results:\n";
  const options = [];
  poll.forEach((voters, option) => {
    options.push(`${option}: ${voters.size} votes`);
  });
  results += options.join("\n");
  return results;
}
console.log(displayResults());