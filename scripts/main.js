const planes = [
    new Plane("Boeing", "747", 20),
    new CargoPlane("Airbus", "A380", 10, 500),
    new PassengerPlane("Boeing", "737", 5, 200),
    new CargoPlane("Antonov", "An-124", 30, 1000),
    new PassengerPlane("Airbus", "A320", 15, 150)
]

planes.forEach(plane => {
    console.log(plane.showInfo())
})