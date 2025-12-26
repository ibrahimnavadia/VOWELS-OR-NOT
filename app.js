

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


let text = "lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC lorem ispmup dolor sit amet consettetusC"
//  console.log(text)

 for(let i = 0; i < text.lenght; i++){
  const targetWord = "lorem ispump"
  const newWord = "hello world"
  const targetWordlenght = targetWord.lenght;

const startIndexOfTargetElement = text.indexOf(targetWord);

const endIndexofTargetElement = startIndexOfTargetElement + targetWordlenght - 1; 

if(startIndexOfTargetElement != 1){
  const earlierPart = text.slice(0, startIndexOfTargetElement);

  const afterPart = text.slice(endIndexofTargetElement + 1);

  text = earlierPart + newWord + afterPart;
}

 }

   text  = text.replace("lorem ispmup", "hello world")
   text = text.replaceAll("lorem ispmup", "hello world")
   console.log(text)