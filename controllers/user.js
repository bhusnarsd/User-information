const userModel = require("./../models/user");

// to create a new user

exports.createUser = async(req, res) => {
    try{
        const savedData = await new userModel(req.body).save();
        res.json(savedData);

    }
    catch(err){
        res.send({err})
    }

}



// to get all user data


exports.getAlluser = async(req, res) => {
    try{
        const users = await userModel.find();
        res.status(201).json(users);

    }catch(err){
        res.status(5000).json({err});

    }

}
// to get specific user data


exports.getUser = async(req, res) => {
    try{
        const user = await userModel.find({_id:req.params.userID});
        res.status(201).json(user);

    }catch(err){
        res.status(5000).json({err});

    }

}


// delete db

exports.deleteUser = (req, res) => {
    userModel.findOneAndDelete({_id:req.params.userID},(err,data) => {
        if(err){
            res.json({err});
        }
        else{
            res.json(data);
        }
    })  

}
exports.updateUser = (req, res) => {
    userModel.findOneAndUpdate({_id:req.params.userID}, req.body, {new:true},
         (err, data) => {
             if(err){
                 res.json({err});
             }
             else{
                 res.json(data);
             }
         }
    )

}









