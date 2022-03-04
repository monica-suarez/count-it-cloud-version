
//funct that takes in a string and returns the number of each letter
const letterCounter = (wordInput) =>{
    //grabs input from HTML
    wordInput = document.getElementById("strInput").value;
    //takes input and makes it lowercase, finds only letters and puts //it into an array with RegEx. sorts my alphabetical order
    wordInput = wordInput.toLowerCase().match(/[a-z]/g).sort()
    //create empty object for letter count
    let letterCounts = {};

    //loops through the array and creates counter to add letter count as key/value pairs
    for(let i=0; i<wordInput.length; i++){
      let letters = wordInput[i];
      if(letterCounts[letters]){
        letterCounts[letters]++;
      }
      else{
        letterCounts[letters] = 1;
      }
    }
      console.log(letterCounts);
      for(letter in letterCounts){
        const li = document.createElement("li");
        // let counts = "Letter " + [letter] + " occurs " + letterCounts[letter] + " time(s)."
        li.appendChild(document.createTextNode("Letter " + [letter] + " occurs " + letterCounts[letter] + " time(s)."))
        const element = document.getElementById("showCount");
        // return counts;
        element.append(li);
      }
    };
    
const reset = () => {
  document.getElementById("strInput").value = "";
  document.getElementById("showCount").innerHTML = "";
}