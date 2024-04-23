import { useSelector } from "react-redux";


function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-3 mb-0 rounded-0 bg-transparent text-black">
            <h5 style={{marginBottom: "-10px"}}><marquee style={{color: "white"}}>🎉 Welcome to our New Year Sale! Enjoy incredible discounts and 
            amazing deals on a wide range of products. Unwrap the savings with our exclusive offers and grab fantastic bargains! Hurry, 
            limited time only! Start the year with style and savings at BharatCrafted.
                </marquee></h5>
            <div className="clearfix"></div>
        </div>
    )
}

export default Header;

