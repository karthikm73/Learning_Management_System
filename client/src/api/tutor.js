import API from "./index";

const createCourseAPI = (body, route = `api/tutor/courses/create`) => {
    return API.post(
        route,
        body,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    )
}

const getCourseDetailsAPI = (id, route = 'api/tutor/courses/') => {
    return API.get(route + id)
}

const getTopTutorsAPI = async (route='api/tutor/details/top') => {
    return API.get(route) 
}
const getSignedInTutorAPI = () => API.get('/api/auth/tutor/restore')


const createLessonAPI = (body, route = `api/tutor/lessons`) => {
    return API.post(
        route,
        body,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    )
}

const handleLogOutAPI = (route='api/auth/tutor/logout') => {
    return API.delete(route)
}


export {
    createCourseAPI,
    getCourseDetailsAPI,
    createLessonAPI,
    getTopTutorsAPI,
    handleLogOutAPI,
    getSignedInTutorAPI
}