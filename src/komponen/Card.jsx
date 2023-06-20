

export default function Card  (props) {
    const styleCard={
        height: 150,
        width: 250,
        backgroundColor: "crimson",
        borderRadius: 15,
        padding: 5,
        marginBottom: 15,
        marginLeft:10,
        color: "white"
    }
   
 
  return (
    <div style={styleCard}>
        <br></br>
        <h1 >{props.id}. {props.namaGalaksi}</h1>
        <h4>Diameter: {props.diameterGlksi}</h4>
    </div>
  )
}