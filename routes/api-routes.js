
const router = require("express").Router();
const Workout = require("../models/Workout");


router.get("/api/workouts", (req, res) => { 
    Workout.find({})
    .then(workoutDB => {
        res.json(workoutDB);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(workoutDB => {
        res.json(workoutDB)
    })
});

router.post("/api/workouts", (req, res) => {
    console.log("post route is working okay boss")
    Workout.create(req.body)
    .then(workoutDB => {
        res.json(workoutDB);
    })
    .catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises : body}},
        { new: true, runValidators: true}
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(400).json(err);
    })

});

module.exports = router;