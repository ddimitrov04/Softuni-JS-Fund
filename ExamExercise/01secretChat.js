function secretChat(input){
    let concealedMessage = input[0];
    let i =1;
    while(input[i] != "Reveal"){
       let givenCommand = input[i].split(":|:");
       let instruction = givenCommand[0];
       if(instruction === "ChangeAll"){
           let letterToChange = givenCommand[1];
           let letterToSet = givenCommand[2];
           let pattern = new RegExp(letterToChange, 'g');
           concealedMessage = concealedMessage.replace(pattern, letterToSet);
           console.log(concealedMessage);
           
       }
       if(instruction === "Reverse"){
           let wordToMatch = givenCommand[1];
           if(concealedMessage.includes(wordToMatch)){
               concealedMessage = concealedMessage.replace(wordToMatch, "");
               let reversed = reverseStr(wordToMatch);
               concealedMessage += reversed
               console.log(concealedMessage);
            }else{
               console.log("error");
               
           }
           
       }
       if(instruction === "InsertSpace"){
           let index = Number(givenCommand[1])
           concealedMessage = concealedMessage.slice(0, index) + " " + concealedMessage.slice(index);
           console.log(concealedMessage);
       }

       i++;
    }
    function reverseStr(text){
        return text.split("").reverse().join("")
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat(["Hiware?uiy",
    "ChangeAll:|:i:|:o",
    "Reverse:|:?uoy",
    "Reverse:|:jd",
    "InsertSpace:|:3",
    "InsertSpace:|:7",
    "Reveal"
    ]
    )
