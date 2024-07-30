import React from 'react'

const Card = (props) => {
    return (

      

            <div className=' bg-light  border-0 col-10  col-md-5  col-lg-2  border d-flex justify-content-center gap-3 bg-gradient  p-1 rounded rounded-3'>
                <div className='p-2'>
                    <div className=' d-flex justify-content-center'>
                        <img src={props.icon} className="card-img-top" alt="..." style={{ width: "100px" }} />
                    </div>

                    <div className="card-body">
                        <h5 className=' fw-bold'> { props.name}</h5>
                        <h6>Rank : {props.rank}</h6>
                        <h6>Price : {Math.round(  props.price)}USD</h6>
                        <h6>Supply : {props.totalSupply}Qty</h6>
                        <h6>Market : {props.marketCap }</h6>
                        <div className=' d-flex   gap-3'>
                            <button className=' btn  btn-primary'> <a href={props.websiteUrl} className=' nav-link'>Website</a></button>
                            <button className=' btn  btn-primary'>Buy now</button>
                        </div>
                    </div>
                </div>


            </div>





       



    )
}

export default Card