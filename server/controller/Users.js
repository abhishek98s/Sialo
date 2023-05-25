import User from "../model/User.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id })

        if (!user) return res.status(400).json({ msg: "User doen't exist" });

        res.status(200).json({ user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getAllUser = async (req, res) => {
    try {
        let data = await User.find();

        let users = data.map((d) => {
            d.password = null;
            return d;
        })

        console.log(users)
        res.status(200).json({ users })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}