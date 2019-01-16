const readline = require('readline');
const fs = require('fs');

function border(){
    let arr = [];
    for(let i = 0; i < 34; i++){
       arr[i] = "-";
    }
    console.log(arr.join(""));
}

function names(line) {
    let semi = "empty";
    let i =0;
    while(semi == "empty"){
        if(line.charAt(i) == ";"){
            semi = i;
        }
        i++;
    }

    let lastName = line.substring(0, semi);
    let firstName = line.substring(semi+1, line.length);

    return getEmailAddress(firstName, lastName);
}

function getEmailAddress(firstName, lastName){
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    let arr = [];
    for(let i = 0; i < lastName.length; i++){
        arr[i] = lastName.charAt(i);
        switch(arr[i]){
            case "ä": arr[i] = "ae";
            break;
            case "ö": arr[i] = "oe";
                break;
            case "ü": arr[i] = "ue";
                break;
            default:
                break;
        }
    }
    lastName=arr.join("");

    let mailaddress = firstName.charAt(0) + "." + lastName + "@htl-leonding.ac.at";

    return mailaddress;
}

border();
console.log("email addresses");
border();

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

let teacherNames = [];

rl.on('line', (line) => {
    teacherNames.push(line);
});

rl.on('close', () => {
    for(line of teacherNames){
        console.log(names(line));
    }
    border();
});

