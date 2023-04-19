import { Typography } from "@mui/material"

const Approach = () => {
    return(
        <>
        <div className="text-center mt-24">
        <Typography variant="h2">Our approach to title and escrow</Typography>
        <Typography className="p-6">Through the combination of people, process,<br></br> and technology, Endpoint delivers a closing experience that is simple, secure, and consistent at scale.</Typography>
        </div>
        <div className="flex justify-between mt-16">
            <div className="w-96 h-600 flex flex-col justify-around text-center bg-white rounded-xl">
                <img className="w-52 ml-24" src="people.svg" alt="prople" />
                <Typography variant="h4">People</Typography>
                <Typography>We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
            <div className="w-96 h-600 flex flex-col justify-around text-center bg-white rounded-xl">
            <img className="w-52 ml-24" src="process.svg" alt="prople" />
                <Typography variant="h4">Process</Typography>
                <Typography>We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
            <div className="w-96 h-600 flex flex-col justify-around text-center bg-white rounded-xl">
            <img className="w-52 ml-24" src="tech.svg" alt="prople" />
                <Typography variant="h4">Technology</Typography>
                <Typography>We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
        </div>
        </>
    )
}

export default Approach