function counting(str) {
    var numberofwords = 0;
    for (var i = 0; i < WordCount.length; i++)
      if (str(i) === " ") { 
        numberofwords = +1;
    }
    numberofwords += 1; 
  }
  
  console.log(WordCount("Random String"));