const leapYears = function(year) {
    if(year%4===0){
        if (year%100===0){
            if (year%400===0) {
                return true;
            }else return false
        }else return true;
    }return false;
    //simplified from internet return ((year%4==0)&&(year%100!=0)||(year%400==0));
}

module.exports = leapYears
