const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '': '',
};

function decode(expr) {
    let expArr = expr.split('');
    let result = '';
    for (let i = 0; i < expArr.length; i += 10) {
        let mourseChar = '';
        for (let j = 0; j < 10; j += 2) {
            let tmp = `${expArr[i + j]}${expArr[i + j + 1]}`;
            if(tmp === '10') {
                mourseChar += '.';
            } else if (tmp === '11'){
                mourseChar += '-';
            } else if (tmp === '**'){
                result += ' ';
                break;
            }
        }
        result += MORSE_TABLE[mourseChar];
    }
    return result;
}

module.exports = {
    decode
}