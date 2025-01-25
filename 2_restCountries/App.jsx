import Header from "./component/header"
import './App.css'
import SearchBar from "./component/SearchBar"
import SelectMenu from "./component/SelectMenu"
import CountriesContainer from "./component/CountriesContainer"

const App=()=>{
    return(
        <>
        <Header/>
        <main>
        <div className="search-filter-container">
        <SearchBar/>
        <SelectMenu/>
        </div>
        <CountriesContainer/>
        </main>
        </>
    )

    
      
    
   }
   
   export default App