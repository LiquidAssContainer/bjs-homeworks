function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => element === arr2[index]);
}

function memorize(fn, limit) {
    const memory = [];
    return (...arguments) => {
        const args = Array.from(arguments);
        const memorizedArgs = memory.find(object => compareArrays(object.args, args));
        if (memorizedArgs) {
            return memorizedArgs.result;
        }

        const result = fn(...arguments);
        if (memory.length === limit) {
            memory.shift;
        }
        memory.push( {args, result} );
        return result;
    };
}