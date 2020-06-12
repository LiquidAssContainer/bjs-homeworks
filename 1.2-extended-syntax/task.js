'use strict'

function getResult(a, b, c) {
    let equationRoots = [],
        discriminant = (b ** 2) - (4 * a * c);

    if (discriminant >= 0) {
        let root = ((-b + discriminant ** (1/2)) / (2 * a));
        equationRoots.push(root);

        if (discriminant > 0) {
            root = ((-b - discriminant ** (1/2)) / (2 * a)); // почти полное повторение кода, но вряд ли целесообразно что-то здесь сокращать?
            equationRoots.push(root);
        }
    }

    return equationRoots;
}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }

    if (marks.length > 5) {
        console.log('Оценок больше пяти! Считаем среднее из первых пяти.');
        marks = marks.slice(0, 5);
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    if (!name) {
        name = 'гость';
    }

    let isAdult = false, // по умолчанию
        currentDate = new Date(),
        yearsDiff = currentDate.getFullYear() - dateOfBirthday.getFullYear();

    /* Тут вышла большая вложенность, не считаю это оптимальным, но я хотел сделать максимальную точность вплоть до дня.
    Можно было бы timestamp использовать, но не уверен, что вышло бы достаточно надёжно (високосные годы и прочее) */  
    if (yearsDiff >= 18) {
        if (yearsDiff > 18) {
            isAdult = true;
        } else {
            let monthDiff = currentDate.getMonth() - dateOfBirthday.getMonth();
            if (monthDiff >= 0) {
                if (monthDiff > 0) {
                    isAdult = true;
                } else {
                    let daysDiff = currentDate.getDate() - dateOfBirthday.getDate();
                    if (daysDiff >= 0) {
                        isAdult = true;
                    }
                }
            }
        }
    }

    // Тут можно совершенно по-разному написать, надеюсь, что такой вариант допустим с точки зрения хорошего кода 🤔
    let messageForAdult = `Не желаете ли олд-фэшн, ${name}?`,
        messageForUnderage = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    let result = isAdult ? messageForAdult : messageForUnderage;
    return result;
}