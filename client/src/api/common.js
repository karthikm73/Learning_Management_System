import API from './index'

const getAllCoursesAPI = () => {
    return API.get('/api/user/courses')
}

const getAllCourseByQuery = (query) => {
    return API.get(`/api/user/courses?${query}`)
}

const getLessonDetailsAPI = (lessonId) => {
    return API.get(`/api/user/lessons/${lessonId}`)
}

const getAllCategoriesAPI = (route = 'api/admin/category') => {
    return API.get(route)
}




export {
    getAllCoursesAPI,
    getLessonDetailsAPI,
    getAllCourseByQuery,
    getAllCategoriesAPI,
    
}