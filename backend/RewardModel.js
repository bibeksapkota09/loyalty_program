const mongoose = require("mongoose");

const RewardSchema = mongoose.Schema({

    Reward : {
        type : String
    }
});

module.exports = mongoose.model("reward", RewardSchema);