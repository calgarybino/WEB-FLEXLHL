function whatToDoForLunch(hungry, availableTime) {
  // Write your code here
  if (hungry) {
    if (availableTime >= 30) {
      console.log("Let's go to a sit-down restaurant.");
    } else if (availableTime >= 20) {
      console.log("Let's grab a sandwich and eat it in the park.");
    } else {
      console.log("We're short on time, let's order fast food.");
    }
  } else {
    console.log("Let's wait until we're hungry to decide what to eat.");
  }
}
console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
