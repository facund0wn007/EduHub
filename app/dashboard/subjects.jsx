import React from 'react'
import {isTeacher} from './script'

import SubStudents from './student/subStudents'
import SubTeachers from './teacher/subTeachers'

export default function Subjects() {

    if(isTeacher){
        return <SubTeachers/>
    }
    else{
        return <SubStudents/>
    }
    
}