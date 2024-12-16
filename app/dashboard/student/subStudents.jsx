'use client'

import React, {useState} from 'react'
import {info} from '../script'


export default function SubStudents() {

    const [visibleIndexes, setVisibleIndexes] = useState({});

    const HandleDisplayer = (index) => {
        setVisibleIndexes((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    }

    return (
        <>
            {
                info.map((row, index) =>{
                    return(
                        <div className="dashboardSubject" key={index}>
                            <div className="subjectMenu" onClick={() => HandleDisplayer(index)}>
                                <i className='bx bx-book-bookmark bx-lg'></i>
                                <div className="subjectTitle">{row.name}</div>
                                <i className="bx bx-chevron-down bx-lg displayer"></i>
                            </div>
                            <div className={`${visibleIndexes[index] ? 'subjectInfo' : 'vanish'}`}>
                                <div className="infoNumbers">
                                    <div className="infoNumber">
                                        <div className="number">{row.delivered}</div>
                                        <div className="numberDesc">Entregadas</div>
                                    </div>
                                    <div className="infoNumber">
                                        <div className="number">{row.pending}</div>
                                        <div className="numberDesc">Pendientes</div>
                                    </div>
                                    <div className="infoNumber">
                                        <div className="number">{row.undelivered}</div>
                                        <div className="numberDesc">Sin entregar</div>
                                    </div>
                                </div>
                                <div className="subjectTasks">
                                    <div className="task">
                                        <i className="bx bx-book bx-md"></i>
                                        <div className="taskName">Tarea God</div>
                                        <div className='taskState'>Sin entregar</div>
                                    </div>
                                    <div className="task">
                                        <i className="bx bx-book bx-md"></i>
                                        <div className="taskName">Tarea no tan god</div>
                                        <div className='taskState'>Pendiente</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}