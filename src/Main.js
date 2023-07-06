import {Routes, Route, BrowserRouter} from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./shared_components/header/Header";
import Footer from "./shared_components/footer/Footer";
import CardList from "./components/card_list/CardList";
import CardDetail from "./components/card_detail/CardDetail";

const Main = () => {

    const [confirmSearch, setSearch] = useState("");
    const [images, setImages] = useState([]);

    const api_key = "38096156-9f1a81375793ab44dbf1a075e"

    if (confirmSearch.includes(" ")) {
        confirmSearch.replace(" ", "+")
    }

    const url = "https://pixabay.com/api/?key=" + api_key + "&q=" + confirmSearch + "&image_type=photo&pretty=true"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const imageList = await response.json();
                setImages(imageList["hits"]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [confirmSearch, url]);

    return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/pixabay" element={<CardList images={images} confirmSearch={confirmSearch} setSearch={setSearch} />} />
            <Route path="/image-details/:id" element={<CardDetail images={images} />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    );
}

export default Main;