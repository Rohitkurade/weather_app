// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import "./SearchBox.css";
// import{useState} from "react";

// export default function SearchBox({updateInfo}){
//     let [city,setCity] = useState("");
//     let [error,setError] = useState(false);
//    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//    const API_KEY = "704bcc4bfd474279cdcdeb596665903c";

//     let getWeatherInfo = async ()=>{
//       try{
//         let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&unit=metric`);
//         let jsonResponse = await response.json();
         
//          let result = {
//            city: city,
//            temp: jsonResponse.main.temp,
//            tempMin: jsonResponse.main.temp_min,
//            tempMax: jsonResponse.main.temp_max,
//            humidity: jsonResponse.main.humidity,
//            feels_like: jsonResponse.main.feels_like,
//            weather: jsonResponse.weather[0].description,
//         };
       

         
//          return result;
//       }catch(err){
//           throw err;
//         }


//     };


// let handleChange = (evt) =>{
//     setCity(evt.target.value);
//   };

//   let handleSubmit = async (evt) =>{
//     try{
//     evt.preventDefault();
//     console.log(city);
//     setCity("");
//     let newInfo = await getWeatherInfo();
//     updateInfo(newInfo);
//     }catch (err){
//       setError(true);
//     }
//   };
//    return(
//    <div className="SearchBox">
//    <form onSubmit={handleSubmit}>
//     <TextField id="city" label="City Name" variant="outlined" required  value={city}
//     onChange={handleChange}/>
//     <br></br><br></br>
//     <Button variant="contained" type="submit">Search</Button>
//     {error &&  <p style={{color:"red"}}>No such place exists!</p>}
//    </form>
//     </div>

//     );
// }

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "704bcc4bfd474279cdcdeb596665903c";

    let getWeatherInfo = async () => {
        try {
            // Added units=metric to get Celsius automatically
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            if (jsonResponse.cod !== 200) throw new Error("City not found");

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}