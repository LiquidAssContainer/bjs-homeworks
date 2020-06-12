'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        return `Параметр «${window.percent.placeholder}» содержит неправильное значение ${window.percent.value}`;
    }

    if (isNaN(contribution)) {
        return `Параметр «${window.contribution.placeholder}» содержит неправильное значение ${window.contribution.value}`;
    }

    if (isNaN(amount)) {
        return `Параметр «${window.amount.placeholder}» содержит неправильное значение ${window.amount.value}`;
    }

    let currentDate = new Date();

    if (isNaN(date.valueOf()) || (currentDate >= date)) {
        return 'Неверно указана дата';
    }

    let remainingAmount = amount - contribution,
        percentage = percent / 100 / 12,
        monthsQuantity = (date.getFullYear() - currentDate.getFullYear()) * 12;

    let monthSum = remainingAmount * (percentage + percentage / (((1 + percentage) ** monthsQuantity) - 1));
    let totalSum = monthSum * monthsQuantity;
    totalSum = Math.round(totalSum * 100) / 100;

    console.log(totalSum);
    return totalSum;
}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
    }

    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}