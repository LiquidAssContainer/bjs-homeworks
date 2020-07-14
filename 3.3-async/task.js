class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Missing clock ID');
        }
        if (this.alarmCollection.some(elem => elem.id === id)) {
            console.error('Такой ID уже есть, если шо');
            return;
        }
        this.alarmCollection.push( {id, time, callback} )
    }

    removeClock(id) {
        const idIndex = this.alarmCollection.findIndex(elem => elem.id === id);
        if (idIndex !== -1) {
            this.alarmCollection.splice(idIndex, 1);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime(extraMinutes) { // решил здесь сделать возможность прибавить минуты (для testCase)
        let now = new Date();
        now.setMinutes(now.getMinutes() + (extraMinutes ? extraMinutes : 0));
        const hour = twoDigits(now.getHours());
        const minutes = twoDigits(now.getMinutes());
        return `${hour}:${minutes}`;

        function twoDigits(digit) {
            return (digit < 10) ? '0' + digit : digit; // работает только для положительных чисел, но, думаю, в оверинжинирнге нет смысла
        }
    }

    start() {
        const currentTime = this.getCurrentFormattedTime; // не знаю, как иначе вызвать getCurrentFormattedTime внутри checkClock
        this.timerId = setInterval( () => this.alarmCollection.forEach(checkClock), 1000 * 60);
        this.alarmCollection.forEach(checkClock); // чтобы сразу проверить звонки после вызова start(), не дожидаясь, когда пройдёт одна минута

        function checkClock(item) {
            if (currentTime() === item.time) {
                item.callback();
            }
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        const collection = this.alarmCollection;
        console.log(`Печать всех будильников в количестве: ${collection.length}`);
        collection.forEach(elem => console.log(`Будильник № ${elem.id} заведён на ${elem.time}`));
    }

    clearAlarms() {
        clearInterval(this.timerId);
        const collection = this.alarmCollection;
        collection.splice(0, collection.length);
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock();
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Мда уж'), 1);
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Мда уж'), 1);
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(1), () => { console.log('Мда уж!'); phoneAlarm.removeClock(2) }, 2);
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(2), () => {
        console.log('Мда уж?'); phoneAlarm.stop(); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms() }, 3);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}