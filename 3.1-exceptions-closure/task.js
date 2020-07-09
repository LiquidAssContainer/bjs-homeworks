// Задача № 1

function parseCount(value) {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(e) {
        return e;
    }
}

// Задача № 2

class Triangle {
    constructor(a, b, c) {
        if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(result.toFixed(3));
        // return +result.toFixed(3); а так больше нравится

    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        const message = 'Ошибка! Треугольник не существует';
        return {
            getPerimeter: () => message,
            getArea: () => message,
        }
    }
}