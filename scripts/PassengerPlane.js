class PassengerPlane extends Plane {
    #passengerCapacity
    constructor(manufacturer, model, age, passengerCapacity){
        super(manufacturer, model, age)
        super.validateValue(manufacturer, model, age, passengerCapacity)
        this.#passengerCapacity = passengerCapacity
    }
    showInfo = () => {
        return `${super.showInfo()}, passenger capacity: ${this.#passengerCapacity}`
    }
}