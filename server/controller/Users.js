import User from "../model/User.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        let user = await User.findOne({ _id: id })

        if (!user) return res.status(400).json({ msg: "User doen't exist" });

        user.password = null;

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

        res.status(200).json({ users })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}