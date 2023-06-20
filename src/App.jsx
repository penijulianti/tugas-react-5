import { useRef, useState } from 'react'
import Card from './komponen/Card.jsx';
import "./App.css"
import {IoMdAddCircle} from "react-icons/Io"
import {AiFillMinusCircle} from "react-icons/Ai"
import {RiDeleteBin2Fill} from "react-icons/Ri"
import Header from './komponen/Header.jsx';

let initialGalaxy = [
  {
      id: 1,
      name: "Andromeda",
      diameter: 220000
   },
   {
      id: 2,
      name: "Bima Sakti",
      diameter: 100000
   },
   {
      id: 3,
      name: "Triangulum",
      diameter: 60000
   }
]


function App() {
  const [galaxies, setGalaxies] = useState(initialGalaxy);
  const [nama,setNama] = useState("");
  const [namaEdit,setNamaEdit] = useState("");
  const [dmt,setDmt] = useState("");
  const [no,setNo] = useState("");
  const nextId = useRef(4);

  const editNama = () => {
    setGalaxies(galaxies.map((glx) => glx.id == no ? {...glx,name:namaEdit} : glx))
}

  return (
    <>
    <Header></Header>
    <div className='contain'>
    <div>
      {
        galaxies.map((galak) => (
          <Card key ={galak.id} id ={galak.id} namaGalaksi = {galak.name} diameterGlksi = {galak.diameter}/>
        ))
      }
    </div>

    <div className='add'>
      <h1>Tambah Data</h1>
      <h3>Masukkan Nomor/Id:</h3>   
      <input type="text"   value={nextId.current} onChange={(e) => setNo(e.target.value)}/>
      <h3>Masukkan Nama Galaksi:</h3>   
      <input type="text"  value={nama} onChange={(e) => setNama(e.target.value)}/>
      <h3>Masukkan Diameter:</h3>
      <input type="text"  value={dmt} onChange={(e) => setDmt(e.target.value)}/>
    <br />
    <br />
 <button onClick={(e)  => {e.preventDefault()
    setGalaxies([...galaxies,{id:nextId.current++,name:nama,diameter:dmt}]);
    }}><IoMdAddCircle></IoMdAddCircle>  Belakang</button>
 <button onClick={() =>{
    setGalaxies([{id:nextId.current++,name:nama,diameter:dmt},...galaxies]);
    }}><IoMdAddCircle></IoMdAddCircle>  Depan</button>
    </div>

    <div className='edit'>
      <h1>Edit Data</h1>
    <h3>Masukkan Nomor/Id:</h3>   
      <input type="text"  value={no} onChange={(e) => setNo(e.target.value)}/>
      <h3>Masukkan Nama Galaksi:</h3>   
      <input type="text"  value={namaEdit} onChange={(e) => setNamaEdit(e.target.value)}/>
    <button onClick={editNama}> Edit</button>
    <button
          onClick={(e)=>{
            e.preventDefault();
            const edit = galaxies.map((glx)=> glx.id ==no ? {...glx, diameter: glx.diameter + 1} : glx);
            setGalaxies(edit); 
          }}> 
<IoMdAddCircle></IoMdAddCircle> Diameter</button>
     <button
          onClick={(e)=>{
            e.preventDefault();
            const edit = galaxies.map((glx)=> glx.id ==no ? {...glx, diameter: glx.diameter - 1} : glx);
            setGalaxies(edit); 
          }}> <AiFillMinusCircle></AiFillMinusCircle> Diameter</button>
    </div>


    <div className='del'>
      <h1>Hapus Data</h1>
      <button onClick={() => setGalaxies(galaxies.slice(1))}><RiDeleteBin2Fill></RiDeleteBin2Fill> Depan</button>
      <button onClick={() => setGalaxies(galaxies.slice(0,-1))}><RiDeleteBin2Fill></RiDeleteBin2Fill> Belakang</button>
      <button onClick={() => setGalaxies(galaxies.slice(0,0))}><RiDeleteBin2Fill></RiDeleteBin2Fill> Semua</button>
    </div>
    </div>
    </>
  )
}

export default App
