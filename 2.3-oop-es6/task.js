// Задача № 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value > 100) {
            this._state = 100;
        } else if (value < 0) {
            this._state = 0;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Задача № 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const books = this.books;
        for (let i = 0; i < books.length; i++) {
            if (books[i][type] === value) {
                return books[i];
            }
        }
        return null; // допустимо ли сразу писать так, если подразумевается, что цикл не нашёл подходящие книги?
    }

    giveBookByName(bookName) { // возможно, здесь можно было бы воспользоваться функцией findBookBy('name', bookname), но я не уверен из-за наличия splice
        const books = this.books;
        for (let i = 0; i < books.length; i++) {
            if (books[i].name === bookName) {
                const book = books[i];
                books.splice(i, 1);
                return book;
            }
        }
        return null;
    }
}

// Задача № 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if ((grade >= 1) || (grade <= 5)) {
            if (!this.grades[subject]) {
                this.grades[subject] = [];
            }
            this.grades[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
    }

    getAverageBySubject(subject) {
        const subjectGrades = this.grades[subject]; // допустимо ли такое для сокращения последующего кода и удобства восприятия?
        if (subjectGrades) {
            let sum = 0;
            for (let i = 0; i < subjectGrades.length; i++) {
                sum += subjectGrades[i];
            }
            return sum / subjectGrades.length;
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        let totalSum = 0,
            gradesQuantity = 0;
        const grades = this.grades;

        for (let subject in grades) {
            const subjectGrades = grades[subject];
            gradesQuantity += subjectGrades.length;
            for (let i = 0; i < subjectGrades.length; i++) {
                totalSum += subjectGrades[i];
            }
        }
        return totalSum / gradesQuantity; // вроде бы и так должно работать при отсутствии оценок и возвращать 0
    }
}