// import logo from './logo.svg';

import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import './App.css';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import { Equipments } from './Equipments.js';
import { useEffect,useState } from 'react';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search'
import { Login } from './login';
import { Register } from './register';
import { ForgetPassword } from './forgot';


  const  eqipinfo =
[
  {
   "id": "100",
   "imgg": "https://m.media-amazon.com/images/I/71gUjj5NN1L._SL1500_.jpg",
   "namee": "Bodyfit Home Gym Set 8 Kg to 100 Kg with Straight and Curl Rod + Dumbbell Rods Complete Exercise Equipments 1Kg Pair Dumbbell.",
   "price":500
   
  
  },
  {
   "id": "101",
   "imgg": "https://m.media-amazon.com/images/I/7128IzaOfkL._SL1500_.jpg",
   "namee": "Boldfit Spring Tummy Trimmer for Men & Women, Waist Fat Buster, Abs Exercise & Body Toner Equipment for Home & Gym Use",
   "price":500
   
   
  },
  {
   "id": "102",
   "imgg": "https://m.media-amazon.com/images/I/81hp-qeMKLL._SL1500_.jpg",
   "namee": "WAE- DMM-DIGITAL MOISTURE METER",
   "price":600
   
   
  },
  {
   "id": "103",
   "imgg": "https://m.media-amazon.com/images/I/71KIR5NKqIL._SL1500_.jpg",
   "namee": "WAE - DIGITAL MOISTURE METER (AGRO) Western make Usage/Application Used for check moisture content in grain",
   "price":1500
   
   
  },
  {
   "id": "104",
   "imgg": "https://m.media-amazon.com/images/I/61DN4joKAGL._SL1494_.jpg",
   "namee": "rts More Than 180 Countries 2 Dual USB Universal Multi Plug travel adapter with Indicator Universal Conversion Plug Worldwide All in One Wall AC Power Plug...",
   "price":500
   
   
  },
  {
   "id": "105",
   "imgg": "https://m.media-amazon.com/images/I/71BxH4utziL._UL1500_.jpg",
   "namee": "SPIKE Tummy Trimmer Ab Exerciser for Men and Women Waist Trimming, Bicep, Body Toner Exercise Equipment for Home Yellow",
   "price":100
   
  }
]
 

function App() {
  const[equipInfo,setequipInfo]=useState(eqipinfo);
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    
  const navigate = useNavigate();
  
  return (
    
      <Paper elevation={4} style={{borderRadius:10,margin:10,minHeight:"100vh",backgroundColor:"#959698"}} >
        <div className="App">
      
    
          
          <AppBar position="static" style={{backgroundColor:"#4D4E50"}}>
            <Toolbar className="toolBar">
              <div>
                <Button color="inherit" onClick = {()=>
                   navigate("/Login")}>Home</Button>
                
                <Button color="inherit" onClick = {()=>
                   navigate("/Equipments")}>Equipments</Button>
                




              </div>
              
            </Toolbar>
          </AppBar>
              
          <Routes>
           
            
           
            <Route path="/Equipments" 
            element={<Equipments/>} />
            
            <Route path ="/Register" element={<Register/>}/>
            <Route path="*" element={<NotFound />} />
<Route path ="/ForgetPassword" element={<ForgetPassword/>}/>
            <Route path="/Login" element={<Login/>}/>
            
          </Routes>
        </div>
        </Paper>
    
  ) 
}

function NotFound(){
  return <h1>404 not found</h1>
}






export default App;






