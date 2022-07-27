const router = require("express").Router();
const Student = require("../models/student.js");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;


    const newStudent = new Student({

        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("student added succesfully");
    }).catch((error)=>{
        console.log(`error : ${error}`);
    })

    
});

router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(`error : ${error}`);
    })
})

router.route("/update/:id").put(async (req,res)=>{
    let userid = req.params.id;
    const{name,age,gender}  = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userid,updateStudent)
    .then(()=>{
        res.status(200).send({status : "user updated"});
    }).catch((err)=>{
        res.status(500).send({ status: "user updating failed",error: err.message});
    })
   
    

    
})


router.route("/delete/:id").delete(async (req,res)=>{
    let userid = req.params.id;
    // const{name,age,gender} = req.body;


    await Student.findByIdAndDelete(userid)
    .then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err)=>{
        res.status(500).send({status : "error deleting" , error: err.message});
    })
})


router.route("/get/:id").get(async (req,res)=>{
    let userid  = req.params.id;
    await Student.findById(userid)
    .then((child)=>{
        res.status(200).send({status:"found one",student: child})
    }).catch((err)=>{
        res.status(500).send({status:"error find one", error: err.message})
    })
})


module.exports = router;