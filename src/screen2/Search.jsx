import React, { useState ,useEffect} from 'react';
import '../screen2/search.css'; 
import axios from "axios"
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import Deletedata from '../Pages/Deletedata';
import { MdDelete } from "react-icons/md";


const Search = () => {

const [items, setItems] = useState([]);

console.log(items)

 useEffect(() => {
    (async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setItems(res.data)
      localStorage.setItem("usersdata", JSON.stringify(res.data));
    })();
   
  }, []);


const [search, setSearch] = useState('');
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

  

const styles ={
  container:{
    display:'flex',
    justifyContent:'space-around'
  }
}


  return (
    <>
      
      
    <div className='inner-container'>
         <div className='search-container'>
            <input
              type="text"
              placeholder="Search by Username"
              value={search}
             onChange={(e)=>setSearch(e.target.value)}
             />
             {/* <input type='button' value="Search" 
              onClick={handleFilterClick}

             /> */}
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
                    {/* <Link to={`/update/${item.id}`}> <FaRegEdit/>  </Link>         */}
                     {/* <Deletedata id={item.id}/>   */}
            
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
      
     
    </>
  );
  
};

export default Search;
