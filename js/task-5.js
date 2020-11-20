
class Car {

    static getSpecs(car) {
        console.log(`MaxSpeed: ${car.maxSpeed}, 
    Speed: ${car.speed}, IsOn: ${car.isOn}, 
    Distance: ${car.distance}, Price: ${car.price}.`);
    }
    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    get price() {
        return this._price;
    }
    set price(carPrice) {
        this._price = carPrice
        return this._price
    }

    turnOn() {
        return this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;

    }

    accelerate(value) {
        if (this.isOn) {
            if ((this.speed + value) >= this.maxSpeed) {
                return this.speed = this.maxSpeed;
            } else {
                return this.speed += value;
            }
        } else console.log("Turn on your car");
    }

    decelerate(value) {
        if ((this.speed - value) <= 0) {
            return this.speed = 0
        } else {
            return this.speed -= value
        }

    }

    drive(hours) {
        return this.distance += this.speed * hours
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000