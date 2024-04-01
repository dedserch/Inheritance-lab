class CargoPlane extends Plane {
    #cargoCapacity
    constructor(manufacturer,model,age,cargoCapacity){
        super(manufacturer,model,age)
        super.validateValue(manufacturer,model,age,cargoCapacity)
        this.#cargoCapacity = cargoCapacity
    }
    showInfo = () => {
        return `${super.showInfo()}, cargo capacity: ${this.#cargoCapacity}`
    }
}