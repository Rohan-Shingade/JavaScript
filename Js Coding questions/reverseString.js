const reverseString = (str) => {
  var strToArray = str.split(''); //convert string to array  | [ 'b', 'u', 't', 't', 'e', 'r' ]
  // return strToArray;

  var arrReverse = strToArray.reverse() //reverse converted array | [ 'r', 'e', 't', 't', 'u', 'b' ]
  // return arrReverse;

  var strReverse = arrReverse.join('') //join reversed array into string | rettub
  return strReverse;
}
console.log(reverseString('butter'))


