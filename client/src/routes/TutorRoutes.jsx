import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SignIn, SignUp, HeroTutor, CreateCourse } from '../pages/tutor'
import Navbar from '../components/tutor/Navbar'
import NotFound from '../pages/NotFound'
import TutorPrivate from '../components/authorization/TutorPrivate'
import ManageCourses from '../pages/tutor/ManageCourses'
import UpdateCourse from '../pages/tutor/UpdateCourse'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSignedInTutorAPI } from '../api/tutor'
import { setTutor } from '../features/tutorSlice'


function TutorRoutes() {

    const dispatch = useDispatch()

    useEffect(() => {
      getSignedInTutorAPI()
        .then(response => {
          let tutorData = response.data?.tutorData || null
          if (!tutorData) {
            console.log('tutor not logged in')
            localStorage.removeItem('isAuth')
            return
          }
          dispatch(setTutor({ ...response.data?.tutorData, tutorId: response.data.tutorData._id }))
        })
        .catch(err => {
          console.log('error',err)
        })
    }, [])

    return (
        <>
            <NavbarWithRoutes />
            <Routes>
                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />

                <Route path='/' element={<HeroTutor />} />

                <Route element={<TutorPrivate />}>
                    <Route path='/courses' element={<ManageCourses />} />
                    <Route path='/courses/:id' element={<UpdateCourse />} />
                    <Route path='/courses/create' element={<CreateCourse />} />
                </Route>


                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    )
}

function NavbarWithRoutes() {
    const { pathname } = useLocation();
    console.log(pathname)
    if (pathname === '/tutor/signin' || pathname === '/tutor/signup') {
        return null;
    }
    return <Navbar />;
}

export default TutorRoutes