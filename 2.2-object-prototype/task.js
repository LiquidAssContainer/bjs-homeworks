String.prototype.isPalindrome = function(string) {
    if (string === '') {
        return false;
    }
    
    string = this.toLowerCase();
    console.log(string)

    string = string.split(' ').join('');
    console.log(string)

    let reversedString = string.split("").reverse().join("");
    console.log(reversedString)
    
    if (string === reversedString) {
        return true;
    } else {
        return false;
    }
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let averageMark = sum ? (sum / marks.length) : 0;
    let roundedAverage = Math.round(averageMark);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = new Date(),
        verdict;

        console.log(birthday)
    birthday = Date.parse(birthday);
    console.log(birthday)
    console.log(typeof now)
    console.log(typeof birthday)
    // birthday = birthday.getTime();
    let diff = +now - +birthday;
    console.log(diff)
    if ((diff / 1000 / 3600 / 24 / 365) >= 18) {
        verdict = true;
    } else {
        verdict = false;
    }

    return verdict
}