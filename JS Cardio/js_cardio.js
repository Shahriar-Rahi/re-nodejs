// reverse a string

(function reverseString(str = "rahi"){
    // const strArr = str.split('');
    // strArr.reverse();
    // console.log(strArr.join(''));
    console.log(
        str
        .split('')
        .reverse()
        .join('')
    );

    // let revString = ''
    // for (let i = str.length - 1; i >= 0; i--){
    //     revString = revString + str[i];
    // }
    // console.log(revString);

    // let revString = ''
    // for (let i = 0; i <= str.length  - 1; i++){
    //     revString = str[i] + revString;
    // }
    // console.log(revString);

    // let revString = '';
    // for(let char of str){
    //     revString = char + revString;
    // }
    // console.log(revString);

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // console.log(revString);

    let rs = str
        .split('')
        .reduce((revString, char) => char + revString, '');
    console.log(rs)

})();


/////// validate a palindrome


(function(str="poop"){
    const revString = str
    .split('')
    .reverse()
    .join('');
    str === revString ? console.log("Palindrome") : console.log("Not Palindrome");
})();

/////////// reverse a integer

(function(int=123){
    const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');
    console.log(parseInt(revString) * Math.sign(int));
})();


/// pascal case
(function(str = "i am no one"){
    // const strArr = str
    // .toLowerCase()
    // .split(' ');

    // for(let i = 0; i < strArr.length; i++){
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }
    // console.log(strArr.join(' '));

//    let pascal =  str
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0].toUpperCase() + word.substr(1))
//     .join(' ');

//     console.log(pascal);

    console.log( str.replace(/\b[a-z]/gi, char => char.toUpperCase()));
})();


// max character count
(function(str = "i am a stupid programmer"){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    str.split('').forEach(char => {
        if(charMap[char]){
            charMap[char]++;
        }else{
            charMap[char] = 1;
        }
    })
    for(let char in charMap){
        //debugger;
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    console.log(maxChar);
})();


/////////fizzBuzz


(function(){
    for(let i = 0; i <= 100; i++){
        if(i%15 ===0){
            console.log('Fizzbuzz')
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i)
        }
    }
})();

//longest word

(function(sen = "i don't know anything"){

    const wordArr = sen.toLocaleLowerCase().match(/[a-z0-9]+/g);

    const sorted = wordArr.sort((a, b) => b.length - a.length);
    const longestWordArr = sorted.filter(function(word){
        return word.length === sorted[0].length;
    });
    if(longestWordArr.length === 1)
        console.log(longestWordArr[0]);
    else
        console.log(longestWordArr);
})();


//Array Chunking

(function(arra=[14, 46,3264,66,22,77, 5], len = 3){
    // const chunkedArr = [];

    // let i = 0;
    // while(i < arra.length){
    //    chunkedArr.push(arra.slice(i, i+len));
    //    i += len; 
    // }

    // console.log(chunkedArr);

    const chunkedArr = [];
    arra.forEach(elem => {
        const last = chunkedArr[chunkedArr.length - 1];
        if(!last || last.length === len){
            chunkedArr.push([elem]);
        }
        else{
            last.push(elem);
        }
    });
    console.log(chunkedArr);
})();


//Flatten Array

(function(arrays=[[224,55],[525,25,66],[636,636]]){
    //flattenedArray = arrays.reduce((a,b)=> a.concat(b));
    //flattenedArray = [].concat.apply([], arrays);
    flattenedArray = [].concat(...arrays);

    console.log(flattenedArray);
})();


//Anagram

(function(str1 = "elbow", str2= "below"){
    formatStr(str1) === formatStr(str2) ? console.log("anagram"):console.log("not anagram");
})();


function formatStr(str){
    return str
    .replace(/[^\w]/g, '')
    .toLocaleLowerCase()
    .split('')
    .sort()
    .join('');
}


//letter changes

(function(str = "hello hi"){
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char=>{
        if(char === 'z' || char === 'Z'){
            return 'a';
        }else{
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi, vowel=>{
        return vowel.toUpperCase();
    })
    console.log(newStr);
})();


// function addAll(){
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;
//     for(let i = 0; i < args.length; i++){
//         total += args[i];
//     }
//     return total;
// }

function addAll(...numbers){
    //let total = 0;
    //numbers.forEach(num => total +=num);
    
    //return total;
    return numbers.reduce((acc, cur)=> acc+cur);
}


console.log(addAll(3,3,4,5));

//prime numbers
(function(num = 5){
    let total = 0;
    function checkForPrime(i){
        for(let j=2; j < i; j++){
            if(i%j === 0){
                return false;
            }
        }
        return true;
    }
    for(let i = 1; i<= num; i++){
        if(checkForPrime(i)){
            total += i;
        }
    }
    console.log(total);
})();

// SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);
  
//     function filterArr(arr) {
//       // Return true if NOT in array
//       return args.indexOf(arr) === -1;
//     }
  
//     return arr.filter(filterArr);
//   }
  

  function seekAndDestroy(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
  }

  console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));



  
  // SORT BY HEIGHT
  // Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
  // ex.
  // a = [-1, 150, 190, 170, -1, -1, 160, 180]
  // sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
  
  function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];
  
    a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));
  
    const sortArr = arr2.sort((a, b) => a - b);
  
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
  
    return sortArr;
  }
  console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));




  // MISSING LETTERS
  // Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
  // ex.
  // missingLetters("abce") == "d"
  // missingLetters("abcdefghjklmno") == "i"
  // missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
  
  function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;
  
    str.split('').map((char, i) => {
      if (str.charCodeAt(i) == compare) {
        ++compare;
      } else {
        missing = String.fromCharCode(compare);
      }
    });
  
    return missing;
  }
  console.log(missingLetters("abcdefghjklmno"));



  // EVEN & ODD SUMS
  // Take in an array and return an array of the sums of even and odd numbers
  // ex.
  // evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
  
  function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;
  
    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  
    return [evenSum, oddSum];
  }
  console.log(evenOddSums([50, 60, 60, 45, 71]));