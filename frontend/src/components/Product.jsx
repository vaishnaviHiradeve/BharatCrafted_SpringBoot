import pic from"./pictures/rhombus.webp";
function Product(props){
    const {x,showModal}=props

    return (
        <div className="col-sm-4" key={x.prodid}>
            
            <div className="card shadow text-center text-black mb-3  bg-solid" style={{boxShadow:"0 0 1px 1px black"}}>
            <div className="p-1 text-center">
                    <h5>{x.pname}</h5>
                </div>
                <div className="card-body py-1">
                <img style={{width:"85%",height:"250px",marginBottom:"10px"}} src={pic} className="img-thumnail" />
                <h6 className="float-left">Origin State : {x.brand}</h6>                
                <h6 className="float-right">Price : &#8377; {x.price}</h6>                           
                </div>
                <div className="p-1 m-2">
                    <button type="button" class="btn btn-outline-warning" onClick={e=>showModal(x)}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product;