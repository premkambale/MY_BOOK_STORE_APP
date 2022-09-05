import React, { useState } from "react";
import Model from "./Model";
// import bookimg from "./../assets/bg1.jpg";



const Card = (props) => {
    const [showModel, setShowModel] = useState(false);
    const [bookItem, setBookItem] = useState([]);
    return (
        <>
            {
                props.booksData.map((book, index) => {
                    let thumbmail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                    let dwlink = book.saleInfo.buyLink && book.saleInfo.buyLink;
                    let ebook = book.saleInfo.isEbook && book.saleInfo.isEbook;
                   
            
                    if (thumbmail != undefined && ebook == true) {
                        return (
                            <>
                                <div className="card" onClick={() =>  setShowModel(true)}>
                                    <img src={thumbmail} alt="" onClick={()=>setBookItem(book)}/>
                                    <div className="bottom">
                                        <h3 className="title">{book.volumeInfo.title}</h3>
                                        <p className="amount">&#8377;{book.saleInfo.retailPrice.amount}</p>
                                    </div>
                                </div>
                                <Model
                                    bookItem={bookItem}
                                    showModel={showModel}
                                    onClose={()=>setShowModel(false)}
                                />
                            </>
                        );

                    }

                })
            }

        </>
    );
}
export default Card;