/*
Round any given number to the closest 0.5 step.

Example:
  solution(4.2) = 4
  solution(4.3) = 4.5
  solution(4.6) = 4.5
  solution(4.8) = 5

Round up if number is as close to previous and next 0.5 steps.
solution(4.75) == 5
*/


// Solution

function solution(n) {
  return Math.round(n*2)/2;
}

// or

function solution(n){
  let flooredNum = Math.floor(n);
  let difference = n - flooredNum;
  console.log(difference)

  if(difference < 0.25)
  	return flooredNum;
  else if(difference == 0.5)
  	return n;
  else if((difference > 0.25 && difference < 0.5) || (difference > 0.5 && difference < 0.75))
  	return flooredNum + 0.5;
  else 
  	return flooredNum +1;
}