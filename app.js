function generate() {
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var allNumbers = "0123456789";
    var allSymbols = "~!@#$%^&*";
    var length = Number(document.getElementById("pass-length").value);
    var checkUpCase = document.getElementById("add-upcase").checked;
    var checkNum = document.getElementById("add-num").checked;
    var checkSymbol = document.getElementById("add-symbol").checked;
    var pass = [];
    var randomNum;

    for (var i = 0; i < length; i++) {
        randomNum = Math.floor((Math.random() * 4) + 1);
        pass[i] = funcSelector();
    }

    function funcSelector() {
        if (randomNum === 1) {
            return func1();
        } else if (randomNum === 2) {
            if (checkUpCase) {
                return func2();
            } else {
                return func1()
            }
        } else if (randomNum === 3) {
            if (checkNum) {
                return func3();
            } else {
                return func1()
            }
        } else {
            if (checkSymbol) {
                return func4();
            } else {
                return func1()
            }
        }
    }

    function func1() {
        return lowerChar[Math.floor((Math.random() * lowerChar.length))];
    }

    function func2() {
        return upperChar[Math.floor((Math.random() * upperChar.length))];
    }

    function func3() {
        return allNumbers[Math.floor((Math.random() * allNumbers.length))];
    }

    function func4() {
        return allSymbols[Math.floor((Math.random() * allSymbols.length))];
    }

    pass = pass.join("");
    document.querySelector(".pass-input").value = pass;
}