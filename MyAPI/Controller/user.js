const mongoose = require('mongoose')
const express = require('express')

const MyModel = require('../Model/Schema')


const getUser = async (req, res) => { 
    try {
        const myUser = await MyModel.find();
                
        res.status(200).json(myUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


module.exports = getUser;
