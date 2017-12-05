var num = document.getElementsByClassName('num');

var operator = document.getElementsByClassName('operator');

var screen = document.getElementById('screen');

var period = document.getElementById('period');

var equal = document.getElementById('equal');

var del = document.getElementById('del');

for (var i = 0; i < num.length; i++) {

    num[i].addEventListener('click', function () {

        var number = screen.innerText += this.innerText;

        if (number.length > 15) {

            screen.innerText = this.innerText;

        }

    });
}

period.addEventListener('click', function () {

    if (screen.innerText === '') {

        var number = screen.innerText += '0.';

    } else {

        screen.innerText += '.';
        
    }

});

for (var i = 0; i < operator.length; i++) {

    operator[i].addEventListener('click', function () {

        if (screen.innerText === '') {

            screen.innerText += '';

        } else if (screen.innerText != '') {

            screen.innerText += this.innerText;

        }

    });

}

equal.addEventListener('click', function () {

    if (screen.innerText != '') {

        screen.innerText = eval(screen.innerText);

    } else {

        screen.innerText = '';

    }

});

del.addEventListener('click', function () {

    screen.innerText = '';

});