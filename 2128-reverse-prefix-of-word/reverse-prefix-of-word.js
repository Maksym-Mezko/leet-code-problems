/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == ch) {
            let end = i;
            let prefix = '';
            while (end >= 0) {
                prefix += word[end];
                end--;
            }
            let wordStart = i + 1;
            let wordEnd = word.length - 1;
            while (wordStart <= wordEnd) {
                prefix += word[wordStart];
                wordStart++;
            }
            return prefix;
        }
    }
    return word;
};