String.prototype.isPalindrome = function isPalindrome() {
    const string = this;

    if (string === '') {
        return false;
    }
    
    const stringInLowerCase = string.toLowerCase();
    const formattedString = stringInLowerCase.split(' ').join('');
    const reversedString = formattedString.split("").reverse().join("");
    
    return (formattedString === reversedString) ?
        true : false;
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    const averageMark = sum ? (sum / marks.length) : 0;
    return Math.round(averageMark);
}

function checkBirthday(birthday) {
    const now = new Date();
    const birthdayMilliseconds = Date.parse(birthday);
    const diff = +now - +birthdayMilliseconds;

    return ((diff / 1000 / 3600 / 24 / 365.25) >= 18) ?
        true : false;
}