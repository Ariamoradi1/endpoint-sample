import { Typography } from "@mui/material"

const Informations = () => {
    
    return(
        <>
        <div className="flex justify-center flex-wrap max-[380px]:ml-36">
          <div>
            <Typography className="p-12" variant="h4">Endpoint Closing, Inc</Typography>
            <ul className="p-8 text-xl">
              <li className="p-4">51 West 3rd StreetSuite 335Tempe, AZ 85281</li>
              <li className="p-4">+1 (602) 610-1242</li>
              <li className="p-4">closing.az@endpoint.com</li>
              <li className="p-4">Monday - Friday, 7am - 6pm</li>
            </ul>
          </div>
          <img className="w-400 rounded-xl p-4" src="groupp.png" alt="group" />
        </div>
        </>
    )
}

export default Informations