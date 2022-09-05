import React, { useState } from "react";
// https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyAIOeEAd6Lq0WFAdj4cSSxTOOTNXW3zg0Q
import "./style.css";
import Card from "./Card";
import axios from "axios";

const Main = () => {

    const [search, setSearch] = useState("");
    //useState to store the books data
    const [booksData, setBooksData] = useState([]);
    const [show, setShow] = useState(false);




    const searchBook = () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAIOeEAd6Lq0WFAdj4cSSxTOOTNXW3zg0Q&maxResults=40`)
            .then((res) => {
                setBooksData(res.data.items);
                setShow(true);

            })
            .catch((err) => {
                console.log("error");
            })


    }
    return (
        <>
            <div className="main">
                <div className="Header" >
                    <div className="Row1">
                        <h1>A Room Without Books Is Like <br /> A Body Without A Soule</h1>
                    </div>
                    <div className="Row">
                        <h1>Find Your Books</h1>
                        <div className="Search">
                            <input type="text" placeholder="Search Book You Want" value={search} onChange={e => setSearch(e.target.value)} />
                            <button onClick={searchBook}>search</button>
                        </div>
                    </div>

                </div>
             
                <div className="container">
               
                    <Card
                        booksData={booksData}
                    />
                </div>
            </div>
        </>
    );

}
export default Main;