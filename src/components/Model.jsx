import React from "react";
import "./Model.css";


const Model = (props) => {
    const book=props.bookItem;
    if(!props.showModel)
    {
        return null;
    }
    let imgSrc =book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

    return (
        <>
            <div className="overLay">
                <div className="overLay_inner">
                    <button className="close" onClick={props.onClose}><b>X</b></button>
                    <div className="innerBox">
                        <img src={imgSrc} alt="" />
                        <div className="info">
                            <h1>{book.volumeInfo.title}</h1>
                            <h3>{book.volumeInfo.authors}</h3><br />
                            <h4>{book.volumeInfo.publisher}<span>{book.volumeInfo.publisheDate}</span></h4><br />
                            <a href={book.volumeInfo.previewLink}><button>More</button></a>
                            <a href={book.saleInfo.buyLink}><button>Buy</button></a>

                        </div>
                    </div>
                    <div className="distription">{book.volumeInfo.description}</div>

                </div>
            </div>
        </>
    );
}
export default Model