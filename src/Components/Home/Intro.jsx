import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import next from "next";


const Intro = () => {
    return(
        <>
        <div className="intro">
            <div className="texts">
            <Typography style={{fontSize:'80px',marginBottom:'40px'}} variant="h1">Built to close.</Typography>
            <Typography style={{marginBottom:'40px'}}>Discover how our team of experts and intuitive technology <br></br> will simplify your home closing experience.</Typography>
            <Button style={{backGroundColor:'#1794c2'}} variant="contained">Work With Us</Button>
            </div>
            <img className="intro-img" src="intro.svg" alt="all" />
        </div>
        </>
    )
}

export default Intro