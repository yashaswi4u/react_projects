import Header from "./component/header"
import './App.css'
import SearchBar from "./component/SearchBar"
import SelectMenu from "./component/SelectMenu"
import CountriesContainer from "./component/CountriesContainer"
import { useState } from "react"

const App=()=>{
    const [query,setQuery]=useState('')
    return(
        <>
        <Header/>
        <main>
        <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
        <SelectMenu/>
        </div>
        <CountriesContainer query={query}/>
        </main>
        </>
    )

    
      
    
   }
   
   export default App