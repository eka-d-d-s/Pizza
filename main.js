const predl1 = "I love Lasha";
const pre = predl1.slice(5).replace("L","P").toUpperCase();

console.log(pre);
 for(let i = 0; i < 7; i++) {
    console.log("Chetchik:", i)
 }

// function counSpaces (text) {
//     let counter = 0;
//     for (i = 0; i < text.length; i++) {
//         const letter = text[i];
//         if(letter === " ") counter++
//     }
//     return counter;
// }
// console.log(counSpaces ("Sekju hnhfjvmkf bknfjbn fjvjnf vejrnj"));

function countPlace (textt) {
    let counter = 0;
    let index = 0;
    while(index < textt.length) {
        const letter = textt[index];
        if(letter ===" ") counter++;
        index++;
        
    }
    return counter;
}
console.log(countPlace("hybhj jknjknjh rg tgr tr"));


function chetn (num) {
    const digit = num.toString();
    for(let i=0; i<digit.length; i++) {
        const dig = Number(digit[i]);
        if (dig%2 === 0) {
            return true;
        }

    };
}


console.log(chetn(485225521));


const imena = ["Sasha", "Ira", "Dima"];
console.log(imena);
console.log(imena[2]);
console.log(imena[0]);
imena[2] = "Nino";
console.log(imena);
imena[3] = "Inna";
console.log(imena);
imena[4] = "Ninia";
console.log(imena.length);
imena[10] = "Ninushka";
console.log(imena);


console.log(imena);
const imenaPoluch = imena.pop();
console.log(imenaPoluch);
console.log(imena);

function getApper(text) {
    const capital = [];
    for(let i=0; i < text.length; i++) {
        const letter = text[i];
        if(letter === letter.toUpperCase() &&
            letter.toUpperCase() !== letter.toLowerCase()) {
            capital.push(letter);
        }
    }
    return capital;
}
console.log(getApper(" Gkkm, KInjnjj KIIUKL Kkk"));
