class Birds{
    constructor(Birds){
        this.birds=Birds;
        // / Bind methods to ensure `this` refers to the class instance
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.createOne = this.createOne.bind(this);
        this.deleteOne = this.deleteOne.bind(this);
        this.updateOne = this.updateOne.bind(this);
    }

    getAll(req,res,next){
         res.status(200).json({Birds:this.birds});
    }
 
    getOne(req,res,next){
        let ID=req.params.id;
        
        for (let bird of this.birds){
            if (bird.id == ID){
                res.status(200).json({Bird:bird});

            }
        }
    }
    createOne(req,res,next){
        let id=this.birds.length + 1;
        let newBird={id,...req.body};
        this.birds.push(newBird);
        res.status(200).json({newBird:newBird});

    }
    deleteOne(req,res,next){
        let ID=req.params.id;
        let deletedBird;
        for (let bird of this.birds){
            if (bird.id == ID){
                deletedBird=bird;
                break;

            }
        }
        this.birds=this.birds.filter((bird)=>{
              return (bird.id != ID);
        })
        res.status(200).json({deletedBird:deletedBird,Birds:this.birds});
    }

    updateOne(req,res,next){
        let {name,color,species}=req.body;
        let ID=req.params.id;
        let index=this.birds.findIndex((bird,index)=>{
                  return bird.id==ID;
        })
        if(index){
            this.birds.splice(index,1,{id:ID,name:name,color:color,species:species});
            res.status(200).json({updatedBird:this.birds[index]});
        }else{
            res.status(400).send('there is no such object')
        }
        
        

    }


}

const birds = [
    { id: 1, name: "Sparrow", color: "Brown", species: "Passeridae" },
    { id: 2, name: "Parrot", color: "Green", species: "Psittacidae" },
    { id: 3, name: "Peacock", color: "Blue & Green", species: "Pavo cristatus" },
    { id: 4, name: "Eagle", color: "Dark Brown", species: "Accipitridae" },
    { id: 5, name: "Kingfisher", color: "Blue & Orange", species: "Alcedinidae" }
];

module.exports=new Birds(birds);
