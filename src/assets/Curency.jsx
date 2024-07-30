import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Axios from "axios"
import "./curen.css"

const Curency = () => {

    const [curency, setcurency] = useState([]);
    const [search, setsearch] = useState("")

    const handle = (e) => {

        setsearch(e.target.value)

    }

    const sha = async () => {
        await Axios.get("https://openapiv1.coinstats.app/coins",
            {
                headers: { "X-API-KEY": "joncB/jkCMrRlultlJnp1z6VaDRkWUIWMbeZRVeVZpY=" }
            }
        ).then((res) => setcurency(res.data.result))
            .catch((err) => console.log(err))

    }

    useEffect(() => {

        sha()

    }, [])

    console.log(curency);

    return (
        <div className=' sha'>
            <div className=' container '> 
                <h1 className=' fw-bold text-center text-white font-monospace'>Cryptocurrency Tracking</h1>

                <div className=' row d-flex justify-content-center mb-4'>
                    <div className='col-10 col-sm-6 '>
                        <input type="text" className=' form-control' placeholder='Search....' onChange={handle} />
                    </div>
                </div>


                <div className='row  justify-content-center gap-4 '>

                    {
                        curency.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase())).map((e,index) => (
                            <Card {...e} key={index} />
                        ))
                    }

                </div>


            </div>
        </div>
    )
}

export default Curency