function forLoop(array) {
  for (var index = 0; index < 25; index++) {
    if(index === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${index} strange loops.`);
    }
  }
  
  return array;
}

function whileLoop(number) {
  while(number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (maybeTrue() && array.length > 0);
  
  return array;
}