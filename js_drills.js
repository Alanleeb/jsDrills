var num1 = Math.floor(Math.random() * 100)
var num2 = Math.floor(Math.random() * 100)
var total = document.getElementById('sumTwo')
var arrTotal = document.getElementById('sumArr')
var sum = num1 + num2
  total.innerHTML = '1) ' + num1 + ' + ' + num2 + ' = ' + sum

   arrSum = [1, 5, 8, 14, 5]

  var arr = arrSum.reduce( function(total, num) {
    return total + num
  }, 0 )

  arrTotal.innerHTML = '2) The numbers in this array are ' + arrSum + ' and the sum of those numers is ' + arr
