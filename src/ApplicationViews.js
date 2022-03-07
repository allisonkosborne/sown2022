import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { SeedCard } from "./components/seed/SeedCard.js"
import { CollectionCard } from "./components/collections/CollectionCard.js"
import { SeedList } from "./components/seed/SeedList"
import { CollectionList } from "./components/collections/CollectionList"
import { SeedDetail } from "./components/seed/SeedDetail"
import { CollectionDetail } from "./components/collections/CollectionDetail"
import { SeedForm } from './components/seed/SeedForm'
import { CollectionForm } from './components/collection/CollectionForm'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/seeds" element={<SeedCard />} />

                 {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/collections" element={<CollectionCard />} />

                <Route exact path="/seeds/:seedId" element={<SeedDetail />} />

                <Route exact path="/collections/:collectionId" element={<CollectionDetail />} />

                <Route exact path="/seeds" element={<SeedList />} />

                <Route exact path="/collections" element={<CollectionList />} />

                <Route path="/seeds/create" element={<SeedForm />} />

                <Route path="/collections/create" element={<CollectionForm />} />




            </Routes>
        </>
    )
}