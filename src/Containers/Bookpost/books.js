import {useState}from "react";
import Card from "./components/Card";
import axios from "axios";
import "./books.css"
import {FaSearch} from "react-icons/fa"


const Book=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB-VZPwCKWyJViAD1OgOnxwe-kDp6Rj91Y'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="Title">
                <h2>Encuentra tus libros aqui</h2>
                <div className="Search">
                    <FaSearch />
                    <input type="text" placeholder="El nombre de tu libro"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                </div>
            </div>
            

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Book;