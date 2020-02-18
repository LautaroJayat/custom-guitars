import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import '../hat.png'


function Home(props) {
    const [mounted, setMounted] = useState(false)
    console.log('prev', mounted)
    useEffect(() => props.products ? setMounted(true) : console.log('not yet!'), [props.products])
    const { products } = props.match.params
    console.log(products);
    if (products) {
        return (
            <div className="home_grid">
                {props.products[products].map(e => {
                    return (

                        <div className={mounted ? "item-container productsFadeIn" : "item-container"}>
                            <img src={e.imageURL} alt="e.caption"></img>
                            <Link to={`/products/${products}/${e.URL}`} className="titleContainer">
                                <h1 className="itemTitle">{e.captionName}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className="home_grid">
                {props.products.instruments.map(e => {
                    return (

                        <div className={mounted ? "item-container productsFadeIn" : "item-container"}>
                            <img src={e.imageURL} alt="e.caption"></img>
                            <Link to={"/products/instruments/" + e.URL} className="titleContainer">
                                <h1 className="itemTitle">{e.captionName}</h1>
                            </Link>
                        </div>
                    )
                })}
                {props.products.accessories.map(e => {
                    return (

                        <div className={mounted ? "item-container productsFadeIn" : "item-container"}>
                            <img src={e.imageURL} alt="e.caption"></img>
                            <Link to={"/products/accessories/" + e.URL} className="titleContainer">
                                <h1 className="itemTitle">{e.captionName}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>


        )
    }
}


export default Home