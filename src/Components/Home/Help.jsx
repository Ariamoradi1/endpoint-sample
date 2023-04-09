import { useState } from 'react'
import Typography from '@mui/material/Typography'

const Help = () => {
    const [img, setImg] = useState('family.webp')
    const clickHandler = () => {
    setImg('family.webp')
    }
    const clickHandler1 = () => {
    setImg('build.webp')
    }
    const clickHandler2 = () => {
    setImg('natural.webp')
    }
    const clickHandler3 = () => {
    setImg('woman.webp')
    }
    const clickHandler4 = () => {
    setImg('work.webp')
    }
    return(
        <>
        <div className="help-parent">
            <div className="text-help">
                <Typography variant='h2'>Who we help</Typography>
                <Typography className='text-img' onClick={clickHandler}>Buyers & sellers</Typography>
                <Typography className='text-img' onClick={clickHandler1}>Real estate professionals</Typography>
                <Typography className='text-img' onClick={clickHandler2}>Proptech</Typography>
                <Typography className='text-img' onClick={clickHandler3}>Lenders</Typography>
                <Typography className='text-img' onClick={clickHandler4}>Investors</Typography>
            </div>
            <div className="img-help">
                <img className='img-change' src={img} alt="img" />
            </div>
        </div>
        </>
    )
}

export default Help