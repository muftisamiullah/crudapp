import React, { useState, useEffect } from 'react';
import '../screen2/crud.css';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from "react-icons/fa";

const Crud = () => {

const [inputdata, setInputdata] = useState('');
const [items, setItems] = useState([]);
const [editMode, setEditMode] = useState(false);
const [idno, setIdno] = useState();
const [search, setSearch] = useState('');


  console.log(`state id ${idno}`)
    useEffect(() => {
        (async () => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setItems(res.data)
            localStorage.setItem("usersdata", JSON.stringify(res.data));
        })();
    }, []);



console.log(search)


//! remove data

  const removedata = () => {
    setSearch('');
    setItems([]);
  };


  //! delete single record

  const deleterecord = (id) =>{
    const newrecord = items.filter((cur,index)=>{
      return index !== id;
    })
    setItems(newrecord)
    }

    //! edit data
    const editdata =(indexid)=>{
      const edit_item_detail = items.find((curElem,index) => {
        return index === indexid;
       });
       console.log(edit_item_detail)
       setInputdata(edit_item_detail);
       setIdno(indexid)
       setEditMode(true);
    }

   console.log(inputdata)
 
 
   //! update data

  const updateMyData =()=>{
    setItems(
      items.map((curElem,index) => {
        if (index === idno) {
          return { ...curElem, username: inputdata.username, name: inputdata.name , email: inputdata.email };
        }
        return curElem;
      })
   );
    console.log(items)
    setInputdata("");
    setIdno(null);
    setEditMode(false)
  }

const styles ={
  container:{
    display:'flex',
    justifyContent:'space-around'
  }
}


  return (
    <>

    {editMode ? (
        <div>
        <div className="container">
       <div className="wrapper">
         <div className="title"><span>Update </span></div>


         <form  >
           <div className="row">
             <label htmlFor="username">Username</label>
             <input type="text" name="username" value={inputdata.username} placeholder="username" required
             onChange={e => setInputdata({...inputdata,username:e.target.value})}/>
           </div>

          <div className="row">
             <label htmlFor="name">Name</label>
             <input type="text" name="name"  value={inputdata.name} placeholder="name" required
                 onChange={e => setInputdata({...inputdata,name:e.target.value})}/>

           </div>

           <div className="row">
           <label htmlFor="email">Email</label>
           <input type="email" name="email"  value={inputdata.email} placeholder="Email or Phone" required
             onChange={e => setInputdata({...inputdata, email : e.target.value})}/>

           </div>

           <div className="row button" onClick={()=>updateMyData()}>
             <input type="submit" value="Update"/>
           </div>

         </form>
       </div>
     </div>
     </div>
    ): (
        <div className='inner-container'>
            <div className='search-container'>
                <input
                type="text"
                placeholder="Search by Username"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
                <input type='button' value="Create"
                // onClick={handleFilterClick}

                /> 
            </div>
        <table className="table">
            <thead>
            <tr>
                <th style={{width: "40%"}}>Username</th>
                <th style={{width: "30%"}}>Name</th>
                <th style={{width: "15%"}}>Email</th>
                <th style={{width: "15%"}}>Actions</th>
            </tr>
            </thead>

            <tbody>

                {items.filter((item)=>{
                return search.toLowerCase() === '' ? item : item.username.toLowerCase().includes(search.toLowerCase())
                }).map((item,indexid) => (
                <tr  key={item.id} >
                    <td>{item.id}{item.username}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <div style={styles.container}>
                         <FaRegEdit onClick={()=>editdata(indexid)} /> 
                    

                        {/* onClick={e=>deleterecord(item.id)} */}


                        <MdDelete onClick={()=>deleterecord(indexid)}/>
                        </div>
                    </td>
                </tr>
                ))}

                </tbody>


        </table>
        <button className='remove-btn'
        onClick={removedata}
        >Remove All</button>
        </div>
    )}
    </>
  );

};

export default Crud;