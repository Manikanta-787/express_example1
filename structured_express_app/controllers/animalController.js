class Animals {
    constructor(animals) {
        this.animals = animals;
    }

    getAll(req, res, next) {
        res.status(200).json({ "Animals": this.animals });
    };

    getOne(req, res, next) {
        let ID = parseInt(req.params.id);
        let particularAnimal = this.animals.find(animal => animal.id === ID);

        if (particularAnimal) {
            res.status(200).json({ "animal": particularAnimal });
        } else {
            res.status(404).json({ "message": "Animal not found" });
        }
    }
    
    createOne(req,res,next){
        let id=this.animals.length + 1;
        let newAnimal={id,...req.body};
        this.animals.push(newAnimal);
        res.status(200).json({"newAnimal":newAnimal});

    }

    deleteOne(req, res, next) {
        let ID = parseInt(req.params.id);
        let deletedAnimal = this.animals.find(animal => animal.id === ID);

        if (!deletedAnimal) {
            return res.status(404).json({ "message": "Animal not found" });
        }

        this.animals = this.animals.filter(animal => animal.id !== ID);
        res.status(200).json({ "deletedAnimal": deletedAnimal, "Animals": this.animals });
    }

    updateOne(req, res, next) {
        let { name, color, species } = req.body;
        let ID = parseInt(req.params.id);

        let index = this.animals.findIndex(animal => animal.id === ID);

        if (index === -1) {
            return res.status(404).json({ "message": "Animal not found" });
        }

        this.animals[index] = { id: ID, name, color, species };
        res.status(200).json({ "updatedAnimal": this.animals[index] });
    }
}

const animals = [
    { id: 1, name: "Lion", color: "Golden", species: "Panthera leo" },
    { id: 2, name: "Elephant", color: "Grey", species: "Elephas maximus" },
    { id: 3, name: "Tiger", color: "Orange & Black", species: "Panthera tigris" },
    { id: 4, name: "Zebra", color: "Black & White", species: "Equus zebra" },
    { id: 5, name: "Giraffe", color: "Yellow & Brown", species: "Giraffa camelopardalis" }
];

module.exports = new Animals(animals);
