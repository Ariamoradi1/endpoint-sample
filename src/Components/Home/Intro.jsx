import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import next from "next";


const Intro = () => {
    return(
        <>
        <div className="flex justify-around flex-wrap">
            <div className="p-2 mt-52">
            <Typography className="text-8xl mb-10" variant="h1">Built to close.</Typography>
            <Typography className="mb-10">Discover how our team of experts and intuitive technology <br></br> will simplify your home closing experience.</Typography>
            <Button className="bg-blue-500" variant="contained">Work With Us</Button>
            </div>
            <img className="w-600 h-800" src="intro.svg" alt="all" />
        </div>
        </>
    )
}

export default Intro