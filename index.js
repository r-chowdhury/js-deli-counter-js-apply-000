let katzDeliLine = [];

const takeANumber = (line, person) => { //this function takes the second paramter, adds them to the katDeliLine array, and returns their position in line.
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line."; //don't have to subtract 1 since it's position not index.
}

const nowServing = (line) => {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  frontOfLine = line[0];
  line.splice(line.indexOf(frontOfLine), 1); //remove 0th element, and it's only one element.
  return "Currently serving " + frontOfLine;
}

const currentLine = (line) => {
  // first make a separate string that has the actual list of people
  presentLine = '';
  for (let i = 0; i < line.length; i++) {
    presentLine += i+1 + ". " + line[i] + ', ';
  }
  return "The line is currently: " + presentLine; //Append the previously created string.
}