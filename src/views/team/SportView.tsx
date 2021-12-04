import { useState, useEffect } from "react"
import SportAPIService from "../../shared/api/services/SportAPIService";
import { ClapSpinner } from "react-spinners-kit";
import { Card } from "../../components/Card/Card";
import { Container } from '@mui/material'
import './SportView.css'

export const SportView = () => {
 const [resData, setResData] = useState<any>([])
 const [search, setSearch ] = useState("");
 const [loading, setLoading] = useState(true);
 
 useEffect(()=>{
    async function fetchData() {
        try {    
            await SportAPIService.getAllSports()
            .then(response => {
              setResData(response.data.sports)
              setLoading(false)
            }, error => {
              console.log(error)
            })
        } catch (error) {
          console.log(error);
        }
    }
    fetchData();
   },[]);
   
    return (
      <div>
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py:2, my:4}}>
          <input className="search-bar" placeholder="Search..." type="text" onChange={(event) => setSearch(event.target.value)}/>       
        </Container>
        <div>    
           {loading ? ( <div className="spinner"> <ClapSpinner size={30} frontColor="#1bac22" backColor="#9bef9f" /> </div>) : (
             <Container>
                <div className="row">            
                   {resData.filter((item:any) => {          
                    if (search === "") {
                      return item
                    } else if (item.strSport.toLowerCase().includes(search.toLowerCase())) {
                      return item
                    }
                    return false;
                    })  
                   .map((item:any, i:any) => {
                      return <Card key={i} value={item} />;
                   })}            
                </div>
              </Container>
              )}     
        </div>
      </div>
    )
}
