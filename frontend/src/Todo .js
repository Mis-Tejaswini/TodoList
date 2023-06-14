import React, { useState } from "react";
import logo from "./Img/logo.png";

const Todo =()=>{
  const[inputData, setData] =useState();
  const[items, setItem]=useState([]);
  const[toggle, settoggle]= useState(true);
  const[Editelem, setnewEditelem]=useState();
   
  const addItem=()=>{
    if(!inputData){
        alert("Cant Add empty List");
    } else if(inputData && !toggle){
      setItem(
        items.map((elem)=>{
          if(elem.id==Editelem){
             return{...elem, name:inputData}
          }
          return elem;
        })
       )
       settoggle(true);
       setnewEditelem(null);
       setData("");
    }
    else{
      const allInputData= {id:new Date().getTime().toString(), name:inputData}
      setItem([...items, allInputData]);
      setData("")
    } }

   const deleteItem =(index) => {
        const updateItem = items.filter((elem)=>{
          return index !== elem.id; //jitne id match nhi ho rahe wo return karege 
        })
        setItem(updateItem);
   }


   const EditItem=(id)=>{
       let newedit= items.find((elem) => {
         return elem.id==id;
       })
       console.log(newedit);

       settoggle(false);
       setnewEditelem(id);
       setData(newedit.name);

   }
    const removeall = ()=>{
      setItem([]);
    }
    return(
        <>
        <div className="main_div">
            <div className="child_div">
         <figure>
           <img src={logo} alt="img "></img>
           <figcaption>Add your List Here</figcaption>
         </figure>

        <div className="why">
          <div className="AddItem">
        <input type="text" placeholder="Add Item......" value={inputData}  onChange={(e)=>{
          setData(e.target.value);
        }}></input> </div>

        <div className="AddItemIcon">
          {
          toggle ? <i class="fa-solid fa-plus" title="Add Item" onClick={addItem}></i>:
        <i class="fa-solid fa-pen-to-square" title="Update Item" onClick={addItem}></i> }
        </div> </div> 
          
        <div className="showItem">
          {
            items.map((elem)=>{
              return(
                <>
                <div className="eachItem" key={elem.id}>
                  <div className="eachItemName">
                <h3> {elem.name}</h3> </div>
                <div className="iconsss"> 
                <i class="fa-solid fa-pen-to-square" onClick={()=> EditItem(elem.id)}></i>
                </div>
                 <div className="iconss"> 
                <i class="fa-solid fa-trash" onClick={()=> deleteItem(elem.id)}></i> </div>
                </div>
                </>
              )
              
            })
          }
         
        </div>

        <div className="remove-btnss" >
        <button className="remove-btn" onClick={removeall}> Remove All </button>
        </div>

    </div>
    </div>
    </>
    )
   
}
export default Todo;