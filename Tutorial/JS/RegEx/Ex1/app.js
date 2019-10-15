let re;
re = /hello/;
re = /hello/i;


//console.log(re);
//console.log(re.source);

// 1 exec() return result in an array or null
//exec() 
// const result = re.exec('When Sacha come late today we all say hello');
// console.log(result);
// console.log(result[0]);
// console.log(result[1]);
// console.log(result.index);
// console.log(result.input);

// const result = re.test('Hello');
// console.log(result);

// 3 match ()
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

function checkWord (word, testWord) {
    let ch = /testWord/i;
    let result =  ch.test(word);
    return result;
}


console.log(checkWord('kaLatemar', 'late'));


