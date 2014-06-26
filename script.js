for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        document.write('<h2>FizzBuzz</h2><br>');
    } else if (i % 3 == 0) {
        document.write('<h2>Fizz</h2><br>');
    } else if (i % 5 == 0) {
        document.write('<h2>Buzz</h2><br>');
    } else {
        document.write(i + '<br/>');
    }
}