
  function addInts() {
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;

    if (isNaN(n1) || isNaN(n2)) {
      alert('Error: non-numeric values entered!');
    } else {
      var sum = Number(n1) + Number(n2);
      alert('The sum is ' + sum);
    }
      return sum;
  }