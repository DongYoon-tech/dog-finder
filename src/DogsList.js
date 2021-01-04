import React from "react"
import { Link } from "react-router-dom";
import "./DogsList.css"

const DogsList = ({ dogInfo }) => {

    return (
        <div className="DogsList">
            {dogInfo.map(data => (
                <div className="DogsList-puppy">
                    <img src={data.src}></img>
                    <Link to={`/dogs/${data.name.toLowerCase()}`}>
                        <p>{data.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default DogsList;