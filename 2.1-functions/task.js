'use strict'

// Задача № 1

function getSolutions(a, b, c) {
    let solutions = {
        D: '',
        roots: []
    };
    let discriminant = (b ** 2) - (4 * a * c);

    solutions.D = discriminant;

    if (discriminant >= 0) {
        let root = ((-b + discriminant ** (1/2)) / (2 * a));
        solutions.roots.push(root);

        if (discriminant > 0) {
            root = ((-b - discriminant ** (1/2)) / (2 * a));
            solutions.roots.push(root);
        }
    }

    return solutions;
}

function showSolutionsMessage(a, b, c) {
   let result = getSolutions(a, b, c);
   
   console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
   console.log(`Значение дискриминанта: ${result.D}`);

   let roots = result.roots;
   switch(roots.length) {
       case 0:
           console.log('Уравнение не имеет вещественных корней');
       case 1:
           console.log(`Уравнение имеет один корень X₁ = ${roots[0]}`);
       case 2:
           console.log(`Уравнение имеет два корня. X₁ = ${roots[0]}, X₂ = ${roots[1]}`);
   }   
}

// Задача № 2

function getAverageScore(data) {
    let result = {},
        subjectsSum = 0,
        scoredSubjectsAmount = 0; // кол-во предметов хотя бы с одной оценкой

    if (Object.keys(data).length) {
        for (let subject in data) {
            let averageMark = getAverageMark(data[subject]);
            subjectsSum += result[subject] = averageMark;
            scoredSubjectsAmount += averageMark ? 1 : 0;
        }
        result.average = subjectsSum / scoredSubjectsAmount;
    } else {
        result.average = 0;
    }

    return result;
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let result = sum ? (sum / marks.length) : 0;
    return result;
}

// ↓ использовалось для тестирования
let scoresData = {
    algebra: [2, 4, 6, 7, 2],
    geometry: [4, 5, 6, 7, 2],
    poethry: [4, 4, 6, 4, 2],
    history: [4, 4, 6, 9, 2],
    german: [4, 4, 6, 9, 2],
    english: [],
};

// Задача № 3

function getPersonData(secretData) {
    let result = {};
    result.firstName = getDecodedValue(secretData.aaa);
    result.lastName = getDecodedValue(secretData.bbb);
    return result;
}

function getDecodedValue(secret) {
    switch(secret) {
        case 0:
            return 'Родриго';
        case 1:
            return 'Эмильо';
    }
}