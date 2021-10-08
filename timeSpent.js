const prompt = require("prompt-sync")(); //https://sebhastian.com/javascript-console-input/

//Time spent calculator - How many minutes a day did you say?

//https://zenhabits.net/the-only-way-to-become-amazingly-great-at-something/

var spentActivity = prompt("Question : What is the name of the activity you regularly undertake? ")
var spentInMinutes = prompt("Question : How many minutes per session do you usually spend on " + spentActivity + "? ")

const spentOverall = (act,time) => {
    var inMinutesAWeek = time * 7;
    var inHoursAWeek = inMinutesAWeek / 60;
    var inMinutesAYear = inMinutesAWeek * 52;
    var inHoursAYear = inMinutesAYear / 60;
    var inMinutesOver5Years = inMinutesAYear * 5;
    var inHours5Years = inMinutesOver5Years / 60;
    var inMinutesOver10Years = inMinutesOver5Years * 2;
    var inHours10Years = inMinutesOver10Years / 60;

    const resultAWeek = "\n\nIn a week you would have spent " + inMinutesAWeek + " minutes or " + inHoursAWeek.toFixed(1) + " Hours on " + act + ".\n\n"
    const resultAYear = "In a year this translates to " + inMinutesAYear + " minutes or " + inHoursAYear.toFixed(1) + " Hours.\n\n"
    const result5Years = "Times that by 5 years and it becomes " + inMinutesOver5Years + " minutes or " + inHours5Years.toFixed(1) + " Hours.\n\n"
    const result10Years = "Fast forward 10 years and " + inMinutesOver10Years + " minutes or " + inHours10Years.toFixed(1) + " Hours would have been spent.\n\n"
    const resultTimeToMastery = "Looking back from the future, how has this time spent improved your life or helped you become great at something?\n\n"

    return  resultAWeek + resultAYear + result5Years + result10Years + resultTimeToMastery
}

console.log(spentOverall(spentActivity,spentInMinutes))