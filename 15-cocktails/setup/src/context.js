import React, { useState, useContext, useEffect } from "react"
import { useCallback } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("a")
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${url}${searchTerm}`)
      const data = await res.json()
      const {drinks} = data
      if(drinks){
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])
  

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
