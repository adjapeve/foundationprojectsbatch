const ftoc = function(faren) {
  let result=(faren-32) * (5/9);
  if (result!=0&&result%2!=0){
    return parseFloat(result.toFixed(1));
  }else
  return result;
}

const ctof = function(celsius) {
  let result=(celsius*(9/5)) + 32;
  if (result!=0&&result%2!=0){
    return parseFloat(result.toFixed(1));
  }else
  return result;
}

module.exports = {
  ftoc,
  ctof
}
