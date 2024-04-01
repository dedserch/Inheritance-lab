class PassengerPlane extends Plane {
    #passengerCapacity
    constructor(manufacturer, model, age, passengerCapacity){
        super(manufacturer, model, age)
        this.#validateValue(manufacturer,model,age,passengerCapacity)
        this.#passengerCapacity = passengerCapacity
    }
    #validateValue = (...values) => {
        values.forEach(value => {
            if (!value || value < 0) {
                throw new Error("Некорректное значение переменных: " + value)
            }
        })
    }
    showInfo = () => {
        return `${super.showInfo()}, passenger capacity: ${this.#passengerCapacity}`
    }
}