import React, {useEffect, useState }from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import TinySlider from "tiny-slider-react";

function PropertyDetails() {

    const [photos, setPhotos] = useState([]);

    let { id, address } = useParams();

    const settings = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        controls: true
      };

    const styles = {
        fontSize: '1.2em',
        display:'block',
        textAlign: 'left',
        marginLeft: '10px',
        color: '#757575',
    }

    useEffect(() => {
        axios.get('https://samplerspubcontent.blob.core.windows.net/public/properties.json').then((res) => {
            let response = res.data.properties
            response.map((property) => {
                if(property.id == id){
                    setPhotos(property.resources.photos);
                }
            });
        });
        
    },[])

    return (
    <div style={{margin: "100px"}}>
        <div style={{fontSize: "2em", color: "#757575", margin: "20px"}}>
            Address: {address}
        </div>
    <TinySlider settings={settings}>
        {photos.map((el, index) => (
        <div key={index} style={{ position: "relative" }}>
            <img style={{width:600, heigth:500}}
            className={`tns-lazy-img`}
            src={el.url}
            data-src={el.url}
            alt=""
            />
        </div>
        ))}
    </TinySlider>
    </div>     
    )
}

export default PropertyDetails

