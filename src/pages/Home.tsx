import React from 'react'

import { PocForm } from '../entities/PocForm'

const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
}

export const Home = () => {
    return (
        <>
            <main>
                <PocForm onSubmit={handleSubmit} />
            </main>
        </>
    )
}
