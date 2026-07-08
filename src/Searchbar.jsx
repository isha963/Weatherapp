


function Searchbar({city, handleCity, handleClick}) {
  
  return (
    <>
      <input type="text" value={city} onChange={handleCity} /> <button onClick={handleClick}>Search</button>
      
    </>
  )
}

export default Searchbar
