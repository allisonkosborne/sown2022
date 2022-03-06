import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { SeedCard } from './components/seed/SeedCard.js'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/seeds" element={<SeedCard />} />
            </Routes>
        </>
    )
}