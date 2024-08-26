import SCRIPTS from "../ch5_dataset.js";

function characterScript(char, arr) {
    let char_code = char.charCodeAt(0);  // Get Unicode value of the character
    for (let element of arr) {
        if (element.ranges.some(([from, to]) => char_code >= from && char_code <= to)) {
            return element.direction;
        }
    }
    return null;  // Return null if the character doesn't belong to any script
}

function Dominant(str, arr) {
    let obj = [
        { name: 'rtl', count: 0 },
        { name: 'ltr', count: 0 },
        { name: 'ttb', count: 0 }
    ];

    for (let i = 0; i < str.length; i++) {
        let direction = characterScript(str[i], arr);
        if (direction) {
            for (let j = 0; j < obj.length; j++) {
                if (obj[j].name === direction) {
                    obj[j].count++;
                }
            }
        }
    }

    // Find the dominant direction
    let dominant = obj.reduce((max, current) => current.count > max.count ? current : max);
    return { dominant: dominant.name, counts: obj };
}

console.log(Dominant("Hello, مرحبا, こんにちは, Привет", SCRIPTS));
