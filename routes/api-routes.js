
const router = require("express").Router();
const Workouts = require("../models/workout");


router.get("/api/workouts", (req, res) => { 
    Workouts.find({})
    .then(workoutDB => {
        res.json(workoutDB);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
    .then(workoutDB => {
        res.json(workoutDB)
    })
});

router.post("/api/workouts", (req, res) => {
    console.log("post route is working okay boss")
    Workouts.create(req.body)
    .then(workoutDB => {
        res.json(workoutDB);
    })
    .catch(err => {
        res.json(err)
    })
})

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workouts.findByIdAndUpdate(
        params.id,
        {$push: {exercises : body}},
        { new: true, runValidators: true}
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(400).json(err);
    })

})

module.exports = router;