import User from "../model/User.js";

export const getUser = async (id) => {
    let user = await User.findOne({ _id: id })

    if (!user) throw Error("User doen't exist");
    user.password = null;

    return user;
}

export const getAllUser = async () => {
    let data = await User.find();

    if (!data) throw Error("No user available");

    let users = data.map((user) => {
        user.password = null;
        return user;
    })

    return users;
}