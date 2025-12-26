

let words = prompt("enter a word");
let vowels = "aeiouAEIOU";
let foundVowels = "";
let count = 0;

for(let i = 0; i < words.length; i++){
    if(vowels.includes(words[i])){
        foundVowels += words[i] + " ";
        count++;
        console.log(words[i] + " is a vowels")
        alert(words[i] + " is a vowels")
    }else{
        console.log(words[i] + " is not a vowels")
        alert(words[i] + " is not a vowels")
    }
}

console.log("vowels are:" + foundVowels);
console.log("totalVowels:" + count);