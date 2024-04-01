class CargoPlane extends Plane {
    #cargoCapacity
    constructor(manufacturer,model,age,cargoCapacity){
        super(manufacturer,model,age)
        this.#validateValue(manufacturer,model,age,cargoCapacity)
        this.#cargoCapacity = cargoCapacity
    }
    #validateValue = (...values) => {
        values.forEach(value => {
            if (!value || value < 0) {
                throw new Error("Некорректное значение переменных: " + value)
            }
        })
    }
    showInfo = () => {
        return `${super.showInfo()}, cargo capacity: ${this.#cargoCapacity}`
    }
}