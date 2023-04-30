import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return(
        <>
        <footer className="w-full h-fit bg-footer mt-36 max-[380px]:w-500">
            <div className="flex justify-center">
            <div className="mt-36">
            <Typography className="text-white text-center" variant="h4">Ready for an easy title and <br></br> escrow experience?</Typography>
            <Button className="bg-button ml-32 mt-8" variant="contained">lets talk</Button>
            </div>
            </div>
            <div className="flex justify-between text-white p-16 text-xl max-[380px]:flex-wrap max-[380px]:p-8">
                <ul className="max-[380px]:hidden">
                    <li><img src="endpoint.svg" alt=""/></li>
                    <p className="text-base">©2023 Endpoint. All rights reserved.</p>
                </ul>
                <ul>
                    <Typography className="p-4" variant="h5">solution</Typography>
                    <li className="p-4">Buyers & Sellers</li>
                    <li className="p-4">Agents</li>
                    <li className="p-4">Proptech</li>
                    <li className="p-4">Lenders</li>
                </ul>
                <ul>
                    <li className="p-4">Company</li>
                    <li className="p-4">About Us</li>
                    <li className="p-4">Newsroom</li>
                    <li className="p-4">Security & privacy</li>
                    <li className="p-4">Careers</li>
                </ul>
                <ul className="max-[390px]:mt-8">
                    <li className="p-4">Resources</li>
                    <li className="p-4">Partner API</li>
                    <li className="p-4">Blog</li>
                    <li className="p-4">Closing Cost Calculator</li>
                    <li className="p-4">Glossary</li>
                </ul>
            </div>
            <div className="text-white">
                <ul className="flex justify-center max-[380px]:flex-wrap">
                    <li className="p-4">Privacy Notice</li>
                    <li className="p-4">Licenses</li>
                    <li className="p-4">Help Center</li>
                    <li className="p-4">Accessibility</li>
                    <li className="p-4">Terms of Use</li>
                    <div className="ml-8 mt-2 cursor-pointer">
                    <a href="#"><InstagramIcon className="p-2 text-45 cursor-pointer"></InstagramIcon></a>
                    <FacebookIcon className="p-2 text-45"></FacebookIcon>
                    <LinkedInIcon className="p-2 text-45"></LinkedInIcon>
                    </div>
                    </ul>
            </div>
            <div className="mr-auto flex justify-between relative bottom-64">
            <img src="logoo.svg" alt="logo" />
            <img src="footer.svg" alt="ll" className="ml-0 h-80 w-80" />
            </div>
        </footer>
        </>
    )
}

export default Footer