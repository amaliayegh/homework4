
//tirangle Stars

const triangleStars = function(height, row){
    if(height === 0){
      return;
    }
    row = row || 0;
    const str = ' '.repeat(row) + '*'.repeat(1 + (height - 1) * 2);
    console.log(str);
    triangleStars(height - 1, row + 1);
  };
  
  triangleStars(4);

//power

  const power = function(base, n){
    if (n <= 0) {
      return 1; 
    }
    return base * power(base, n - 1);
  };
  console.log(power(4, 4));

//reverse
 
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
};
const str = 'abcde'
const result = reverseString(str);
console.log (result);

//checkerboard

const checkerBoard = function(n) {
    const printRows = function(n, row) {
      if(row > n) {
        return;
      }
      console.log(row % 2 === 0 ? ' '.repeat(n) : ' '.repeat(n));
      printRows(n, row + 1);
    };

    printRows(n, 1);
  };
  
  checkerBoard(5);