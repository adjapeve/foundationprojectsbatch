function palindromes(string) {
    let input = string.replace(/[^A-Za-z]/g, "").toLowerCase();
    return (
        input
            .split("")
            .reduceRight((word, letter) => word + letter) == input
    );
}
//odinproject solution
// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };

module.exports = palindromes
