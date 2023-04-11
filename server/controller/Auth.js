import User from "../model/User.js";
import bcrypt from 'bcrypt';
import fs from 'fs'
import path from 'path'

export const register = async (req, res) => {
    try {
        let {
            firstName,
            lastName,
            phoneNo,
            gender,
            email,
            password,

            img
        } = req.body

        let passwordHash = await bcrypt.hash(password, 10)

        let user = await new User({
            firstName: firstName,
            lastName: lastName,
            phoneNo: phoneNo,
            gender: gender,
            email: email,
            password: passwordHash,
            img: {
                data: fs.readFileSync(path.join('./uploads/' + req.file.filename)),
                contentType: 'image/png',
            }
        })

        const savedUser = await user.save();

        console.log(savedUser)

        res.json({
            message: "sucess"
        })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}