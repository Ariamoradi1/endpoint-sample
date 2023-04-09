import { Typography } from "@mui/material"

const Approach = () => {
    return(
        <>
        <div className="approach-text">
        <Typography variant="h2">Our approach to title and escrow</Typography>
        <Typography style={{padding:'25px'}}>Through the combination of people, process,<br></br> and technology, Endpoint delivers a closing experience that is simple, secure, and consistent at scale.</Typography>
        </div>
        <div className="boxs">
            <div className="box">
                <img src="people.svg" alt="prople" />
                <Typography variant="h4">People</Typography>
                <Typography>We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
            <div className="box">
            <img src="process.svg" alt="prople" />
                <Typography variant="h4">Process</Typography>
                <Typography>We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
            <div className="box">
            <img src="tech.svg" alt="prople" />
                <Typography variant="h4">Technology</Typography>
                <Typography>We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
        </div>
        </>
    )
}

export default Approach