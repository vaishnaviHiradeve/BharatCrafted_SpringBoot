import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import swal from 'sweetalert';

function SellerProfile(){
    const history=useHistory()
    const dispatch=useDispatch()
    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        history.push("/");
    }
    const [sellers,setSellers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers")
        .then(resp=>{
            //console.log(resp.data.data)
            setSellers(resp.data.data)
            console.log(sellers)
        })
    },[])
   
    const id=sessionStorage.getItem("id")
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
        
        <div className="container">
            <div className="card shadow m-3 p-2 bg-solid text-black text-center">
                <h4 className="p-2" style={{borderBottom:"3px solid yellow",width:"300px",margin:"auto"}}>Seller Profile Page</h4>
                <br/>
                <h4>Welcome {user.name}</h4><br/>
                <h5>City : {user.city}</h5><br/>
                <h5>User Id : {user.userid}</h5><br/>
                <h5>Contact No : {user.phone}</h5><br/>
            </div>
           
        </div>
    )
}

export default SellerProfile;
