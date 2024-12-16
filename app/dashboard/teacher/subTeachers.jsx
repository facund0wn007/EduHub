'use client'

import React, { useState } from 'react'
import { info } from '../script'

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
                info.map((row, index) => {
                    return (
                        <div className="dashboardSubject" key={index}>
                            <div className="subjectMenu" onClick={() => HandleDisplayer(index)}>
                                <i className='bx bx-book-bookmark bx-lg'></i>
                                <div className="subjectTitle">{row.name}</div>
                                <i className="bx bx-chevron-down bx-lg displayer"></i>
                            </div>
                            <div className={`${visibleIndexes[index] ? 'subjectInfo' : 'vanish'}`}>
                                <div className="infoNumbers">
                                    <div className="infoNumber">
                                        <div className="number">{row.calificated}</div>
                                        <div className="numberDesc">Calificadas</div>
                                    </div>
                                    <div className="infoNumber">
                                        <div className="number">{row.delivered}</div>
                                        <div className="numberDesc">Entregadas</div>
                                    </div>
                                    <div className="infoNumber">
                                        <div className="number">{row.undelivered}</div>
                                        <div className="numberDesc">Sin entregar</div>
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