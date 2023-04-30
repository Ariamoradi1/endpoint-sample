import next from "next"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const Who = () => {
    return(
        <>
        <div className="flex justify-center max-[380px]:ml-28 max-[380px]:relative max-[380px]:bottom-96">
        <Paper elevation={3} className="text-center w-1100 h-550 rounded-43 max-[380px]:h-fit">
            <div className="flex justify-center flex-col mt-9">
            <Typography className="text-5xl mt-4" variant='h1'>Who We Are</Typography>
            <Typography className="mt-9">Endpoint is a digital title and escrow company built from the ground up to make<br></br> home closing easy for all.</Typography>
            </div>
            <div className="flex justify-around mt-20 max-[380px]:flex-col max-[380px]:p-4">
                <div>
                    <Typography style={{color:'#1794c2'}} variant="h4">8/10</Typography>
                    <Typography>customers would recommend<br></br> Endpoint</Typography>
                </div>
                <div>
                    <Typography  style={{color:'#1794c2'}} variant="h4">350+</Typography>
                    <Typography>employees dedicated to your<br></br> closing experience</Typography>
                </div>
                <div>
                    <Typography  style={{color:'#1794c2'}} variant="h4">20%</Typography>
                    <Typography>average customer time savings<br></br> during the closing process</Typography>
                </div>
            </div>
            <Button className="mt-32 bg-blue-500" variant="contained">Our Story</Button>
        </Paper>
        </div>
        </>
    )
}

export default Who