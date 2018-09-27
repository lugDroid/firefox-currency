
$( document ).ready(function() {
   function round(value, exp) {
    if (typeof exp === 'undefined' || +exp === 0)
      return Math.round(value);

    value = +value;
    exp = +exp;

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
      return NaN;

    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
  }

  $.getJSON('http://data.fixer.io/api/latest?access_key=a6c2e4ff180ec39f6d7cf64a243873e0&symbols=GBP&base=EUR',
    function(data) {
      console.log(data);
      document.getElementById("value").innerHTML = round(1 / data.rates.GBP, 3);
    }); 
});