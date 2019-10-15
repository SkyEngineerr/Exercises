let re;
//literal characters
re = /hello/i;

//metacharacter symbols 
re = /^h/i; //must start with 
re = /d$/i; // must ends with (one char)
re = /world$/i; // must ends with (complete word)
re = /^world$/gi; //must include only this word
re = /h..llo/i; // maches any One character
re =/gre?a?y/i; //optional character (dolar isaratenin solundaki karakter icin gecerli)

//string to match
const str = 'grey';

//Log Results
const result = re.exec(str);
console.log(result);

function reTest (re, str) {
    if (re.test(str)){
        console.log(`${str} matches ${re.source}`)
    } else{
        console.log(`${str} does not match ${re.source}`)
    }
}

reTest(re, str)