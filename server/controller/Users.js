import asyncWrapper from "../middleware/async.js";
import User from "../model/User.js";

export const getUser = asyncWrapper(async (req, res) => {

    const { id } = req.params;

    let user = await User.findOne({ _id: id })

    if (!user) return res.status(400).json({ msg: "User doen't exist" });

    user.password = null;

    res.status(200).json({ user });

})

export const getAllUser = asyncWrapper(async (req, res) => {

    let data = await User.find();

    let users = data.map((d) => {
        d.password = null;
        return d;
    })

    res.status(200).json({ users })
    
})