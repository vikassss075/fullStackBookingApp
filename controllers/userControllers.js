const User = require('../models/userModel');
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ users });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'unable to fetch users',
            error: error.message
        });
    }
};
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'unable to fetch user',
            error: error.message
        });
    }
};
const addUser = async (req, res)=>{
    try{
        const {name, email, age} = req.body;
        const user = await User.create({
            name: name,
            email: email,
            age: age
        });
        console.log('user created');
        res.status(201).json({
            message: 'user created',
            user
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json(
            {
            message: 'unable to create user',
            error: error.message
        }
        )
    }
};

const updateUser = async (req, res)=>{
    try{
        const {name, email, age} = req.body;
        const user = await User.findByPk(req.params.id);
        user.name = name;
        user.email = email;
        user.age = age;
        await user.save();
        res.status(200).json({
            message: 'user updated',
            user
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: 'unable to update user',
            error: error.message
        });
    }
}

const deleteUser = async (req, res)=>{
    try{
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        res.status(200).json({
            message: "user deleted",
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "unable to delete",
            error: error.message
        })
    }
}

module.exports ={
    addUser,
    updateUser,
    getUsers,
    getUserById,
    deleteUser
};