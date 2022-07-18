import { useEffect ,useState} from 'react';
import { EquipmentCard } from './EquipmentCard';
import { API } from './global';

export function Equipments() {
  
  const[equipmentInfo,setequipmentInfo]=useState([]);

  function getEquipmentAPI(){
    fetch(`${API}/Equipments`)
    .then((data)=>data.json())
    .then((mvs)=>setequipmentInfo(mvs));
  }

  useEffect(()=>{
    getEquipmentAPI();
  },[]);

  return (
    <div className="equipList">
      {equipmentInfo.map((value, index) => {
        return <EquipmentCard key={value._id} id={value._id} 
        img={value.imgg} name={value.namee} price={value.price}
                           
                          equipInfo={equipmentInfo} 
                          setequipmentInfo={setequipmentInfo} 
                          getEquipmentAPI = {getEquipmentAPI} />;
      })}
    </div>
  );
}
