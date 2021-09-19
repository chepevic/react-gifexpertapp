import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';



const GifExpertApp=()=>{
    //const categories=['Once Puch', 'Sumaria X','Dragon Ball'];
    const [categories, setCategory] = useState(['Once Puch']);
   /* const handleAdd=()=>{
        setCategory([...categories,'HunterXHunter']);

    }*/

    return(
        <>
        <h2>Gift Expert</h2>
        <AddCategory setCategory = {setCategory}/>
         <hr/>
       
             <ul>
                 {
                     categories.map((category)=>
                        <GiftGrid 
                        key={category}
                        category={category} />
                     )
                 }   
             </ul>
         
        </>
    )

}
export default GifExpertApp;