// Sum to Zero
/*Write a function that takes in an array of numbers.
 *The function should return True if any two numbers in list sum to 0, and false otherwise.*/

function addToZero(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// addToZero function is 0(n) in time complexity

// Unique Characters
/**
 * Write a function that takes in a single word, as a string.
 *  It should return True if that word contains only unique characters. Return False otherwise.*/

function hasUniqueChars(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str.charAt(i) === str.charAt(j)) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

// hasUniqueChars function is 0(n) in time complexity

// Pangram Sentence
/**
 * A pangram is a sentence that contains all the letters of the English alphabet at least once,
 * like “The quick brown fox jumps over the lazy dog.”
 * Write a function to check a sentence to see if it is a pangram or not.
 */

function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet.charAt(i))) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// isPangram function is 0(1) in time complexity since there is a fix number of 26 characters in alphabet

// Longest Word
/**
 * Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
 */

function findLongestWord(array) {
    let longest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest) {
            longest = array[i].length;
        }
    }
    return longest;
}

console.log(findLongestWord(["hi", "hello"]));

// findLongestWord function is 0(n) in time complexity
