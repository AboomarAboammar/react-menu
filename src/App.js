import React ,{ useState } from 'react';
import { Container } from 'react-bootstrap';
import Category from './components/Category';
import Header from './components/Header';
import ItemesList from './components/ItemesList';
import NavBar from "./components/NavBar"
import {Items} from "./Data";

function App() {
  const [itemsData,setItemsData] =useState(Items);
  const allCategory= ["الكل",...new Set(Items.map((i)=>i.category))]
  console.log(allCategory)
  // filter
  const filterBycategory=(cat)=>{
    if(cat === "الكل"){
      setItemsData(Items)
    }else{
   const newArr = Items.filter((item)=>
    item.category===cat)
   setItemsData(newArr)}
  }
  const filterSearch=(word)=>{
    if(word !== ""){
      const newArr = Items.filter((item)=>
      item.title===word)
      setItemsData(newArr)}
    }
  return (
    <div className="color-body font">
      <NavBar filterSearch={filterSearch}/>
    <Container>
     <Header/>
     <Category filterBycategory={filterBycategory} allCategory={allCategory}/>
     <ItemesList itemsData={itemsData}/>
    
     
    </Container>
    </div>
  );
}

export default App;
