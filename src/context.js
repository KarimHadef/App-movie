import React, { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";


const AppContext = React.createContext();
const API_URL = `https://www.omdbapi.com/?apikey=b43a1da6&s=titanic`;

const AppProvider = ({ children }) => {
const [isLoading , setIsLoading] = useState(true);
const [movie,setMovie]=useState([]);
const [isError,setIsError] = useState ({show: "false",msg:""});

 const getMovies = async(url)=>{
  try{
const res = await fetch(url);
const data = await res.json();
console.log(data);
if(data.Response === "True"){
  setIsLoading()
  setMovie(data.Search);
}else { setIsError({
  show:true,
  msg:data.error,
});}
  }catch(error){
  console.log(error);
  }
};

useEffect(()=>{
  getMovies(API_URL);
},[]);


  // const [query, setQuery] = useState("hacker");
  // const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
 <AppContext.Provider value={{ movie, isLoading, isError }}>
   {children}
  </AppContext.Provider>
   );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };