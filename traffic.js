const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};


function runSequence(config, cycles) {
  let counter = 0;

  if (config.phases.length < 1) {
    console.log("No phases found");
    return;
  }

  while (counter < cycles) {

    if (config.fault === true) {
      console.log("Faulted phase!");
      break;
    }

    for (let i = 0; i < config.phases.length; i++) {
      if (config.phases[i].duration <= 0) {
        console.log(("Invalid phase detected"));
      } else {
        console.log((`Switching to ${config.phases[i].color} for ${config.phases[i].duration} s`));
      }
    }

    counter++;
  }
}

runSequence(config4, 5);

function generateTimeline(config, cycles) {
    let cumulativeTimes = [];
    let counter = 0;
    let elapsedTime = 0;

    while (counter < cycles) {
        for (let i = 0; i < config["phases"].length; i++) {
            elapsedTime += config.phases[i].duration;
            cumulativeTimes.push(elapsedTime);
        }
        counter++;
    }

    return cumulativeTimes;
}
console.log(generateTimeline(config4, 1));