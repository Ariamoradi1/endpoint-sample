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
        <div className="flex justify-around mt-32 max-[380px]:relative max-[380px]:bottom-96">
            <div className="mt-6">
                <Typography className='max-[380px]:text-35' variant='h2'>Who we help</Typography>
                <Typography className='p-2 text-xl mt-4 cursor-pointer hover:text-blue-400' onClick={clickHandler}>Buyers & sellers</Typography>
                <Typography className='p-2 text-xl mt-4 cursor-pointer hover:text-blue-400' onClick={clickHandler1}>Real estate professionals</Typography>
                <Typography className='p-2 text-xl mt-4 cursor-pointer hover:text-blue-400' onClick={clickHandler2}>Proptech</Typography>
                <Typography className='p-2 text-xl mt-4 cursor-pointer hover:text-blue-400' onClick={clickHandler3}>Lenders</Typography>
                <Typography className='p-2 text-xl mt-4 cursor-pointer hover:text-blue-400' onClick={clickHandler4}>Investors</Typography>
            </div>
            <div>
                <img className='w-500 h-500 rounded-lg max-[380px]:h-64 max-[380px]:ml-28 max-[380px]:mt-24' src={img} alt="img" />
            </div>
        </div>
        </>
    )
}

export default Help