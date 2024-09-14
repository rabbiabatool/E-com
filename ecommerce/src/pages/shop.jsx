import React from "react";
import Hero from "../components/hero/hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
// import Footer from "../components/footer/footer";
const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop
