import { findUser, generateToken, isMatchingPassword, passwordHash, uploadToCloudinary } from "./index.js";
import asyncWrapper from "../middleware/async.js";
import User from "../model/User.js";

export const registerUser = asyncWrapper(async (userData, imgPath) => {
    let {
        firstName,
        lastName,
        phoneNo,
        gender,
        email,
        password,
    } = userData

    const hashedPassword = await passwordHash(password);
    const imgUrl = await uploadToCloudinary(imgPath);

    let newUser = new User({
        firstName,
        lastName,
        phoneNo,
        gender,
        email,
        password: hashedPassword,
        img: imgUrl.secure_url
    })

    const savedUser = await newUser.save();
    return savedUser
})


export const loginUser = async (loginCredientials) => {
    const { email, password } = loginCredientials;
    
    const user = await findUser(email);

    await isMatchingPassword(password, user);

    const firstName = user.firstName;
    const token = await generateToken(firstName, process.env.JWT_SECRET, process.env.JWT_LIFETIME);
    user.password = null;

    return { token, user };
}