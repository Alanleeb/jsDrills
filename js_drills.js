var num1 = Math.floor(Math.random() * 100)
var num2 = Math.floor(Math.random() * 100)
var total = document.getElementById('sumTwo')
var arrTotal = document.getElementById('sumArr')
var celsius_p = document.getElementById('celsius')
// var fahrenheit = document.getElementById('temp').value
var temp_btn = document.getElementById('getTemp')
//This gives the sum of two random numbers
var sum = num1 + num2
  total.innerHTML = '1) ' + num1 + ' + ' + num2 + ' = ' + sum

//This sums all the numbers in the array.
  var arrSum = [1, 5, 8, 14, 5]
  var arr = arrSum.reduce( function(total, num) {
    return total + num
  }, 0 )

arrTotal.innerHTML = '2) The numbers in this array are ' + arrSum + ' and the sum of those numers is ' + arr




  temp_btn.addEventListener('click', function() {
    var fahrenheit = document.getElementById('temp').value
    console.log(fahrenheit)
    var celsius = (fahrenheit - 32) * 0.55
    celsius_p.innerHTML = fahrenheit + '&#176; fahrenheit is ' + celsius + '&#176; in Celsius.' 
  })
