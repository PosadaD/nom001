import "./App.css"
import Header from "./Components/Header/header";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Containers/Home/Home"
import NotFound from "./Containers/404/NotFound";
//import PostDetail from "./Containers/PostDetail/PostDetail"
import SubPostDetail from "./Containers/Subpost/SubPostDetail"
import Tablas from "./Containers/Tablas/Tablas"


function App(){
  return(
    <>
      {/* <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/:postId" element={<PostDetail/>}></Route>
          <Route path="/sub"></Route>
            <Route path="sub/:subpostId" element={<SubPostDetail/>}></Route>
          <Route path="/tab"></Route>
            <Route path="tab/:tabpostId" element={<Tablas/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter> */}

      <Home></Home>
    </>
  )
}


export default App;
