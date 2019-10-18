

var alg1Input=[];
var reversed=[];



document.getElementById('palindrome').addEventListener('click', function(){

 var givenString = document.getElementById('alg1').value;
 console.log(givenString);
 document.getElementById('result1').innerHTML += givenString + ' is your word';
 alg1Input.push(givenString.value);

 var splitString = givenString.split('');
 console.log(reversedString);


 var reversedString = splitString.reverse('');


 joinString = reversedString.join('');
 console.log(reversedString);


 document.getElementById('result2').innerHTML += joinString + ' is your word reversed! WOW!';
 reversed.push(reversedString.value);

 if (joinString === givenString){
   document.getElementById('palRes').innerHTML = 'PALINDROME!! NICE 1';
 } else {
   document.getElementById('palRes').innerHTML = 'NOT PALENDROME!! SORT IT OUT';

 }
});




document.getElementById('numb').addEventListener('click', function(){
  var x = parseInt(document.getElementById('alg2').value);
  console.log(x);

  if (x % 2 == 0){
    document.getElementById('numbRes').innerHTML = 'It\'s even!';
  }
  else {
    document.getElementById('numbRes').innerHTML = 'Not even!'
  }
});





document.getElementById('replaceBtn').addEventListener('click', function(){
  var givenSentence = document.getElementById('givenPara').innerHTML;
  console.log(document.getElementById('givenPara').innerHTML);



  var replacedSentence = givenSentence.replace(/mistakes/g, 'bugs');
  document.getElementById('givenPara').innerHTML = replacedSentence;
});
