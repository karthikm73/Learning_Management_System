import API from "./index";

const userSignInAPI = (body) => API.post('/api/auth/signin', body);

const userSignUpAPI = (body) => API.post('/api/auth/signup', body);

const getSignedInUserAPI = () => API.get('/api/auth/user/restore')

/**
 * Retrieves course details from the API.
 * @param {string} id - The ID of the course.
 * @param {string} [route='/user/courses/enroll/'] - The API route for fetching course details. Defaults to '/user/courses/enroll/'.
 * @returns {Promise} - A Promise that resolves to the course details retrieved from the API.
 */
const getCourseDetailsAPI = (id, route = '/api/user/courses/enroll/') => API.get(route + id)

const enrollCourseAPI = (body) => API.post('/api/user/courses/enroll', body)

/**
 * Retrieves details of the logged-in user from the API.
 * The user ID will be retrieved from the token present in the client-side, which will be decoded on the server.
 * @returns {Promise} - A Promise that resolves to the user details retrieved from the API.
 */
const getUserDetailsAPI = () => API.get('/api/user/details')

const updateUserDetailsAPI = body => API.post('/api/user/details', body)

/**
 * Creates an order for a specific course using the API.
 * @param {string} courseId - The ID of the course for which the order is being created.
 * @returns {Promise} - A Promise that resolves to the response data containing the created order details.
 */
const createOrderAPI = courseId => API.post('/api/user/orders/create', { courseId })

const verifyPaymentAPI = data => API.post('/api/user/orders/payment/verify', data)

const isEnrolledInCourseAPI = courseId => API.get(`/api/user/details/enrolled/${courseId}/check`)

const getAllOrdersByUserAPI = () => API.get(`/api/user/orders`)

const getUserEnrolledCoursesAPI = () => API.get('/api/user/courses/enroll')

const handleLogOutAPI = () => API.delete('/auth/logout')


export {
    getCourseDetailsAPI,
    getUserEnrolledCoursesAPI,
    isEnrolledInCourseAPI,
    enrollCourseAPI,
    handleLogOutAPI,
    createOrderAPI,
    verifyPaymentAPI,
    getUserDetailsAPI,
    updateUserDetailsAPI,
    getAllOrdersByUserAPI,
    userSignInAPI,
    userSignUpAPI,
    getSignedInUserAPI
}