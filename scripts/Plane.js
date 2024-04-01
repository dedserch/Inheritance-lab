class Plane {
    #manufacturer
    #model
    #age
    constructor(manufacturer,model,age){
        this.#validateValue(manufacturer,model,age)

        this.#manufacturer = manufacturer
        this.#model = model
        this.#age = age
    }
    #validateValue = (...values) => {
        values.forEach(value => {
            if (!value || value < 0) {
                throw new Error("Некорректное значение переменных: " + value)
            }
        })
    }

    showInfo(){
        return `Manufacturer: ${this.#manufacturer}, model: ${this.#model}, age: ${this.#age}`
    }
}

