import React from "react"
import { useParams, Link } from "react-router-dom";
import "./DogDetails.css"

const DogDetails = ({ dogInfo }) => {

    const { name } = useParams();
    const oririnalName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div>
            <h1>Hi There!</h1>
            {dogInfo.map(d => (
                d.name == oririnalName ?
                    <div className="DogDetails">
                        <img src={d.src}></img>
                        <h3>His name is {d.name}!</h3>
                        <h3>Age: {d.age}</h3>
                        <div className="DogDetails-facts">
                            {d.facts.map(f => (
                                <ul>
                                    <li>{f}</li>
                                </ul>
                            ))}
                        </div>
                        <Link to="/">Go Back</Link>
                    </div>
                    :
                    null
            ))}
        </div>
    )
}

export default DogDetails;