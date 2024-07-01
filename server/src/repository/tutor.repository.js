const Tutor = require('../models/tutor.model')

const getTutors = async (limit) => {
    const topTutors = await Tutor.find({}).limit(limit).select('name email')
    return topTutors
}

const findTutorByEmail = async email =>
    await Tutor
        .findOne({ email })
        .select({ email: 1, name: 1, isBlocked: 1, password: 1, phone: 1 })
        .catch(err => console.log('error while quering database for tutor with email', email))

const getAllTutors = async () => {
    const users = await Tutor.find()
    return users
}

const blockTutorById = async (_id) => {
    const isBlocked = await Tutor.updateOne({ _id}, { isBlocked: true })
    return isBlocked 
}

const unblockTutorById = async (_id) => {
    const isBlocked = await Tutor.updateOne({ _id}, { isBlocked: false })
    return isBlocked 
}

module.exports = {
    getTutors,
    getAllTutors,
    blockTutorById,
    unblockTutorById,
    findTutorByEmail
}