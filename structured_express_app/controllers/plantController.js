class Plants {
    constructor(plants) {
        this.plants = plants;
    }

    getAll(req, res, next) {
        res.status(200).json({ "Plants": this.plants });
    }

    getOne(req, res, next) {
        let ID = parseInt(req.params.id);
        let particularPlant = this.plants.find(plant => plant.id === ID);

        if (particularPlant) {
            res.status(200).json({ "plant": particularPlant });
        } else {
            res.status(404).json({ "message": "Plant not found" });
        }
    }

    createOne(req,res,next){
        let id=this.plants.length + 1;
        let newPlant={id,...req.body};
        this.plants.push(newPlant);
        res.status(200).json({"newPlant":newPlant});

    }

    deleteOne(req, res, next) {
        let ID = parseInt(req.params.id);
        let deletedPlant = this.plants.find(plant => plant.id === ID);

        if (!deletedPlant) {
            return res.status(404).json({ "message": "Plant not found" });
        }

        this.plants = this.plants.filter(plant => plant.id !== ID);
        res.status(200).json({ "deletedPlant": deletedPlant, "Plants": this.plants });
    }

    updateOne(req, res, next) {
        let { name, color, species } = req.body;
        let ID = parseInt(req.params.id);

        let index = this.plants.findIndex(plant => plant.id === ID);

        if (index === -1) {
            return res.status(404).json({ "message": "Plant not found" });
        }

        this.plants[index] = { id: ID, name, color, species };
        res.status(200).json({ "updatedPlant": this.plants[index] });
    }
}

const plants = [
    { id: 1, name: "Rose", color: "Red", species: "Rosa" },
    { id: 2, name: "Sunflower", color: "Yellow", species: "Helianthus" },
    { id: 3, name: "Tulip", color: "Various", species: "Tulipa" },
    { id: 4, name: "Cactus", color: "Green", species: "Cactaceae" },
    { id: 5, name: "Bamboo", color: "Green", species: "Bambusoideae" }
];

module.exports = new Plants(plants);
