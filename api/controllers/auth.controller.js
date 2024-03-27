import express from "express";
import bcryptjs from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import {errorHandler} from "../utils/error.js";

export const signup = async(req, res, next) => {
    const {username, email, password} = req.body;
    const hashedpassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({username, email, password: hashedpassword});
    try {
        await newUser.save()
        res
            .status(200)
            .json("user created succesfully");
    } catch (err) {
        next(err)
    }

};

export const signin = async(req, res, next) => {
    const {email, password} = req.body;
    console.log(password)
    try {
        const validUser = await User.findOne({email});
        if (!validUser) {
            return next(errorHandler(404, "Invalid Credentials!"));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Invalid Credentials!"));
        }
        const token = jwt.sign({
            id: validUser._id
        }, process.env.JWT_SECRET)
        const {
            password: pass,
            ...rest
        } = validUser._doc;
        res
            .setHeader('Authorization', `Bearer ${token}`)
            .status(201)
            .json(rest)

    } catch (error) {
        next(error);
    }
}