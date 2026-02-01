// import Card from '@mui/material/Card';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// import Typography from '@mui/material/Typography';
// import './InfoBox.css';


// export default function InfoBox({ info }){
//    // const INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHklMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";

//      const COLD_URL ="https://unsplash.com/photos/a-snowy-road-with-trees-on-both-sides-YPrpSi9Wbxs";
//      const HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
//      const RAIN_URL ="https://plus.unsplash.com/premium_photo-1667926192316-5e4e421475ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//     return(
//          <div className="InfoBox">
            
//          <div className="cardContainer">
//             <Card sx={{ maxWidth: 345 }}>
//          <CardMedia
//            sx={{ height: 140 }}
//            image={
//             info.humidity >0 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
//             }
//            title="green iguana"
//          />
         
         
//          <CardContent>
//            <Typography gutterBottom variant="h5" component="div">
//              {info.city}
//            </Typography>
//            <Typography variant="body2"  color="text.secondary" component={"span"} >
//             <p>Temprature ={info.temp}&deg;C</p>
//             <p>Humidity ={info.humidity}</p>
//             <p>Min Temp ={info.tempMin}&deg;C</p>
//             <p>Max Temp={info.tempMax}&deg;C</p>
//             <p>The weather can be is described as <i>{info.weather}</i>and feels
//                like{info.feels_like}&deg;C
//             </p>


            
//            </Typography>
//         </CardContent>
         
//        </Card>
//        </div>
//        </div>
//     );
// }

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

// Importing Icons for better visual feedback
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    // Direct Image Links (Fixed for Greenland/Cold regions)
    const COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=500&auto=format&fit=crop";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345, borderRadius: "15px" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 15 
                            ? HOT_URL 
                            : COLD_URL
                        }
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80 
                                ? <ThunderstormIcon /> 
                                : info.temp > 15 
                                ? <WbSunnyIcon style={{color: "orange"}}/> 
                                : <AcUnitIcon style={{color: "blue"}}/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = <b>{info.temp}&deg;C</b></p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>
                                The weather feels like <i>{info.feels_like}&deg;C</i> and is described as <b>{info.weather}</b>.
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}