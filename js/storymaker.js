/*
JavaScript Assignment 1 - 
Christopher Blouin
*/

/*
Declare variables of type constant, as these will not be reassigned throughout the script.

Attach variables to each of the button elements in the DOM by selecting the associated ID attribute.
*/
const nounOne = document.querySelector("#nounOne");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const nounTwo = document.querySelector("#nounTwo");
const setting = document.querySelector("#setting");
const viewSentence = document.querySelector("#viewSentence");
const randomSentence = document.querySelector("#randomSentence");
const resetStory = document.querySelector("#resetStory");

/*
Declare variables for each of the paragraph elements in the DOM with the corresponding ID attribute.

The text content of the paragraphs is what will be manipulated in corresponding functions. */
let selectedNounOne = document.querySelector("#selectedNounOne");
let selectedVerb = document.querySelector("#selectedVerb");
let selectedAdjective = document.querySelector("#selectedAdjective");
let selectedNounTwo = document.querySelector("#selectedNounTwo");
let selectedSetting = document.querySelector("#selectedSetting");

// Declare two variables that are attached to the paragraph element that will display the text for the user chosen story or random generated sentence.
let displaySentence = document.querySelector("#displaySentence");
let randomSentenceOutput = document.querySelector("#displaySentence");

// Declare Arrays for each corresponding button.
// Array for first button
let nounOneArray = [
  "The Martian",
  "Oscar the Grouch",
  "The Cookie Monster",
  "Snoopy",
  "Squidward",
  "The Grinch",
  "Sid The Sloth",
];

// Array for second button
let verbArray = [
  "Laughed With",
  "Held",
  "Danced With",
  "Jumped With",
  "Ran With",
  "Listened To",
];

// Array for third button
let adjectiveArray = [
  "An Angry",
  "A Loud",
  "A Silly",
  "A Weird",
  "An Old",
  "A Small",
];

// Array for fourth button
let nounTwoArray = [
  "Elephant",
  "Monkey",
  "Mammoth",
  "Genie",
  "Frog",
  "Bug",
  "Grasshopper",
];

// Array for fifth button
let settingArray = [
  "On A Skateboard",
  "On The Moon",
  "In My Spaghetti",
  "In An Airplane",
  "On An Iceberg",
  "In My Shoes",
];

// Create a index starting value for the nounOneArray named nounOneIdex set to 0, so we can track the index in a function.
let nounOneIndex = 0;
// Set the noun
function setNoun() {
  // Set the Noun One paragraph text content equal to whatever index position the array is currently at.
  selectedNounOne.textContent = nounOneArray[nounOneIndex];
  // Add to the index count with each button click.
  nounOneIndex++;
  // If the index is greater than or equal to the array length, set the index back to 0 so the user can keep cycling through the array multiple times.
  if (nounOneIndex >= nounOneArray.length) {
    nounOneIndex = 0;
  }
}

// Iterate through the verbArray indexes, setting the text content to the current index value in the given array, if the index is greater than the amount of values in the array, it will cycle back to 0.
let verbIndex = 0;
function setVerb() {
  selectedVerb.textContent = verbArray[verbIndex];
  verbIndex++;
  if (verbIndex >= verbArray.length) {
    verbIndex = 0;
  }
}

// Iterate through the adjectiveArray indexes, setting the text content to the current index value in the given array, if the index is greater than the amount of values in the array, it will cycle back to 0.
let adjectiveIndex = 0;
function setAdjective() {
  selectedAdjective.textContent = adjectiveArray[adjectiveIndex];
  adjectiveIndex++;
  if (adjectiveIndex >= adjectiveArray.length) {
    adjectiveIndex = 0;
  }
}

// Cycle the second noun array, when this function is called the index of the array will start at 0, and if it is continually called, it will keep adding 1 to the index, changing the text content since each index value holds a string value.
let nounTwoIndex = 0;
function setNounTwo() {
  selectedNounTwo.textContent = nounTwoArray[nounTwoIndex];
  nounTwoIndex++;
  if (nounTwoIndex >= nounTwoArray.length) {
    nounTwoIndex = 0;
  }
}

// Cycle through the story setting array
let settingIndex = 0;
function setSetting() {
  selectedSetting.textContent = settingArray[settingIndex];
  settingIndex++;
  if (settingIndex >= settingArray.length) {
    settingIndex = 0;
  }
}

/* 
This function will display in the paragraph element with ID displaySentence.

The displaySentence.textContent is equal to each of the current array text contents, each index the user selects will be placed in this string.
*/
function fullStory() {
  displaySentence.textContent = `${selectedNounOne.textContent} ${selectedVerb.textContent} ${selectedAdjective.textContent} ${selectedNounTwo.textContent} ${selectedSetting.textContent}!`;
}

// Create a function that will generate a random sentence using the indexes in each of the arrays built above.
function randomStory() {
  /*
  Referenced Week 3 Lab Arrays regarding for the Math.random() method.
  
  By applying the Math.random method to each of the arrays, it will store the random index value in the declared variable. These variables will be called in the displaySentence.textContent variable.
  */
  let randomNounOne = Math.floor(Math.random() * nounOneArray.length);
  let randomVerb = Math.floor(Math.random() * verbArray.length);
  let randomAdjective = Math.floor(Math.random() * adjectiveArray.length);
  let randomNounTwo = Math.floor(Math.random() * nounTwoArray.length);
  let randomSetting = Math.floor(Math.random() * settingArray.length);

  // Set the text content to each of the above arrays, the [] holds the index that was randomly generated, whatever index is generated will be associated with the corresponding array.
  displaySentence.textContent = `${nounOneArray[randomNounOne]} ${verbArray[randomVerb]} ${adjectiveArray[randomAdjective]} ${nounTwoArray[randomNounTwo]} ${settingArray[randomSetting]}!`;
}

// Create a wipeStory function, that will set the textContent of the outputed sentence and user selected choices to empty string values;
function wipeStory() {
  selectedNounOne.textContent = "";
  selectedVerb.textContent = "";
  selectedAdjective.textContent = "";
  selectedNounTwo.textContent = "";
  selectedSetting.textContent = "";
  displaySentence.textContent = "";
}

/* 
Event Listeners that are attached to the buttons declared in the global scope, these variables are referencing the buttons in the html document. 

Each event handler is listening for a click, and once that click is recieved, the associated function for clicked button will be invoked.
*/
nounOne.addEventListener("click", setNoun);
verb.addEventListener("click", setVerb);
adjective.addEventListener("click", setAdjective);
nounTwo.addEventListener("click", setNounTwo);
setting.addEventListener("click", setSetting);

// The viewSentence and randomSentence event listeners corresponds with the displaySentence.textContent when called.
viewSentence.addEventListener("click", fullStory);
randomSentence.addEventListener("click", randomStory);
// The resetStory Listener corresponds with all selected textContent and the displaySentence.
resetStory.addEventListener("click", wipeStory);
