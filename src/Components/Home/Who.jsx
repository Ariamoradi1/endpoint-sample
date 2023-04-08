import next from "next"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const Who = () => {
    return(
        <>
        <div className="paper-parent">
        <Paper elevation={3} className="paper-who">
            <div className="paper-content">
            <Typography style={{fontSize:'3rem',marginTop:'15px'}} variant='h1'>Who We Are</Typography>
            <Typography style={{marginTop:'35px'}}>Endpoint is a digital title and escrow company built from the ground up to make<br></br> home closing easy for all.</Typography>
            </div>
            <div className="rating">
                <div className="rat1">
                    <Typography style={{color:'#1794c2'}} variant="h4">8/10</Typography>
                    <Typography>customers would recommend<br></br> Endpoint</Typography>
                </div>
                <div className="rat1">
                    <Typography  style={{color:'#1794c2'}} variant="h4">350+</Typography>
                    <Typography>employees dedicated to your<br></br> closing experience</Typography>
                </div>
                <div className="rat1">
                    <Typography  style={{color:'#1794c2'}} variant="h4">20%</Typography>
                    <Typography>average customer time savings<br></br> during the closing process</Typography>
                </div>
            </div>
            <Button style={{backGroundColor:'#1794c2',marginTop:'120px'}} variant="contained">Our Story</Button>
        </Paper>
        </div>
        </>
    )
}

export default Who