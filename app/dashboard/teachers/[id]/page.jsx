import React from 'react'
import firebaseApp from '@/firebase/config'
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const db = getFirestore(firebaseApp);

export async function generateMetadata({ params }) {
  return {
    title: `${params.id} - Dashboard Teacher`,
  };
}

export default function page({params}) {
  return (
    <>
      <h1>Bienvenido al Dashboard del profesor {params.id}</h1>

      <div className="dashboard">

      </div>
    </>
  )
}
