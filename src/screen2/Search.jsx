import React, { useState ,useEffect} from 'react';
import '../screen2/search.css'; 
import axios from "axios"
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import Deletedata from '../Pages/Deletedata';
import { MdDelete } from "react-icons/md";


const Search = () => {
 const [data, setdata] = useState([]);

  // const getMyData = async () => {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //       setData(res.data);
  //       localStorage.setItem("usersdata", JSON.stringify(res.data));
  //     };
       //console.log(res.data);
   
  // };

  useEffect(() => {
    (async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // console.log(res)
      setdata(res.data);
      console.log(res.data)
      localStorage.setItem("usersdata", JSON.stringify(res.data));
    })();
   
  }, []);


const [search, setSearch] = useState('');

 const [filteredData, setFilteredData] = useState([]);
const [toggle,settoggle] = useState(false);

  const handleFilterChange = (event) => {
    setSearch(event.target.value);
    // (search=''? settoggle(false):settoggle(true))

  };

  
  const handleFilterClick = () => {
    const filtered = data.filter((item) => {
      return search.toLowerCase === '' ? item : item.username.toLowerCase().includes(search.toLowerCase())
    }
     
    );
     setFilteredData(filtered);
     settoggle(true);
  };

  // const handleFilterClick = () => {
  //   const filtered = data.filter((item) =>
  //     item.username.toLowerCase().includes(filter.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };




//   const resetFilter = () => {
//     setFilter('');
//     setFilteredData([]);
//   };


  
//   const deleterecord = (id) =>{
//     console.log(id);
//     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//     alert("delete")
//   }

  

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
              onChange={handleFilterChange}
             />
             <input type='button' value="Search" 
              onClick={handleFilterClick}

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
                
            {( !toggle  ?  data : filteredData).map((item) => (
              <tr key={item.id} >
                <td>{item.id}{item.username}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td> 
                    <div style={styles.container}>
                    <Link to={`/update/${item.id}`}> <FaRegEdit/>  </Link>        
                     {/* <Deletedata id={item.id}/>   */}
                     <button 
                    //  onClick={e=>deleterecord(item.id)}
                     > 

                       <MdDelete/> </button>
                    </div>
                </td>
              </tr>
            ))}
          
            </tbody>  
  
        
      </table>
      <button className='remove-btn'
      //  onClick={resetFilter}
       >Remove All</button>
    </div>
      
     
    </>
  );
  
};

export default Search;
