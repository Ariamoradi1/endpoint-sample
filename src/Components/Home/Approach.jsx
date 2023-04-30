import { Typography } from "@mui/material"

const Approach = () => {
    return(
        <>
        <div className="text-center mt-24 max-[380px]:relative max-[380px]:bottom-96 max-[380px]:ml-28">
        <Typography variant="h2">Our approach to title and escrow</Typography>
        <Typography className="p-6 max-[380px]:text-lg">Through the combination of people, process,<br></br> and technology, Endpoint delivers a closing experience that is simple, secure, and consistent at scale.</Typography>
        </div>
        <div className="text-white w-full p-8 flex flex-wrap justify-between mt-16 bg-bg h-700 max-md:h-fit max-[380px]:bg-white max-[380px]:relative max-[380px]:bottom-96 max-[380px]:right-4 max-[380px]:text-black">
            <div className="w-96 h-600 flex flex-col justify-around text-center bg-col rounded-xl mt-8 max-[380px]:96 max-md:ml-36  max-[380px]:text-black  max-[380px]:bg-white">
                <img className="ml-24 w-52 max-[380px]:relative max-[380px]:right-24" src="people.svg" alt="prople" />
                <Typography className="max-[380px]:mb-32" variant="h4">People</Typography>
                <Typography className="max-[380px]:relative max-[380px]:bottom-28 max-[380px]:text-lg">We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
            <div className="w-96 h-600 flex flex-col justify-around text-center bg-col rounded-xl mt-8  max-md:ml-36  max-[380px]:text-black  max-[380px]:bg-white">
            <img className="w-52 ml-24 max-[380px]:relative max-[380px]:right-24" src="process.svg" alt="prople" />
                <Typography className="max-[380px]:mb-20" variant="h4">Process</Typography>
                <Typography className="max-[380px]:relative max-[380px]:bottom-28  max-[380px]:text-lg">We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
            <div className="w-96 h-600 flex flex-col justify-around text-center bg-col rounded-xl mt-8  max-md:ml-36  max-[380px]:text-black  max-[380px]:bg-white">
            <img className="w-52 ml-24 max-[380px]:relative max-[380px]:right-24" src="tech.svg" alt="prople" />
                <Typography className="max-[380px]:mb-20" variant="h4">Technology</Typography>
                <Typography className="max-[380px]:relative max-[380px]:bottom-28  max-[380px]:text-lg">We assemble the brightest minds in tech<br></br> and real estate to reimagine the home closing experience.</Typography>
            </div>
        </div>
        </>
    )
}

export default Approach