import API from "./index";

const getAllCoursesByTutorAPI = (route = 'api/tutor/courses') => {
    return API.get(route)
}

const getAllUsersAPI = (route = 'api/admin/users') => {
    return API.get(route)
}

const getAllTutorsAPI = (route = 'api/admin/tutors') => {
    return API.get(route)
}

const adminSignInAPI = (body) => API.post('api/auth/admin/signin',body)

/**
 * 
 * @param {*} body req body that containes the name and description of the category 
 * @param {*} route Api route to call
 * @returns promise 
 */
const createCategoryAPI = (body, route = '/api/admin/category') => {
    return API.post(
        route,
        body
    )
}

const blockUserAPI = (userId) => {
    return API.post(
        '/api/admin/users/block',
        { userId }
    )
}

const unBlockUserAPI = (userId) => {
    return API.post(
        '/api/admin/users/unblock',
        { userId }
    )
}

const blockTutorAPI = (userId) => {
    return API.post(
        '/api/admin/tutors/block',
        { userId }
    )
}

const unblockTutorAPI = (userId) => {
    return API.post(
        '/api/admin/tutors/unblock',
        { userId }
    )
}


export {
    getAllCoursesByTutorAPI,
    getAllUsersAPI,
    getAllTutorsAPI,
    createCategoryAPI,
    blockUserAPI,
    unBlockUserAPI,
    blockTutorAPI,
    unblockTutorAPI,
    adminSignInAPI
}