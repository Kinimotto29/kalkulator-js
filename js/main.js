var num = document.getElementsByClassName('num');

var operator = document.getElementsByClassName('operator');

var screen = document.getElementById('screen');

var zero = document.getElementById('zero');

var period = document.getElementById('period');

var limit;

var output;

for (var i = 0; i < num.length; i++) {


    num[i].addEventListener('click', function () {

        output = screen.innerText += this.innerText;

        limit = output.length;

        if (limit > 15) {

            screen.innerText = this.innerText;

        }

    });
}