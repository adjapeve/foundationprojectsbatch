const fibonacci = function (number) {
    let numbers = [1, 1];
    if (number > 0) {
        if (number == 1 || number == 2)
            return 1;
        else {
            for (i = 2; i < number; i++) {
                result = numbers[i - 1] + numbers[i - 2];
                numbers.push(result);
            } return result;
        }
    } else return "OOPS";
}
// ODinProject solution
const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < count; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  };

module.exports = fibonacci
