


function Searchbar({city, handleCity, handleClick, handleKey}) {
  
  return (
    <>
      <input type="text" value={city} onChange={handleCity} onKeyDown={handleKey} /> <button onClick={handleClick}>Search</button>
      
    </>
  )
}

export default Searchbar
