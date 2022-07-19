import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
// import Main  from './components/Main';
// import Header from "./components/Header"



export function EquipmentCard({ img, name, price }) {
  
 const { cartItems, onAdd, onRemove } = ""; 
  return (
    <div  >
    <Card style={{backgroundColor:"whitesmoke",borderRadius:10,margin:30,padding:10,width:400,display:"flex",flexWrap:"wrap",textAlign:"center",justifyContent: "center"}} >
      
        <img  style={{display:"flex",flexWrap:"wrap",paddingBottom: 10,objectFit: "cover"}} className="movieImage" src={img} alt={name} />
        <CardContent>
          <div className="equipCredentials">
            
            <span  className="equipmentname"> {name} </span>
          </div>
          <h1   className="equipmentprice"> Price Per Week
          <Button><CurrencyRupeeIcon/>{price}</Button> <Button ><AddShoppingCartIcon 
//        
/></Button>
</h1>


          
        </CardContent>

    </Card>
    </div>
   
  
  );

}
