import { useState } from 'react';
import Typography from '@mui/material/Typography';

const Questions = () => {
    const [template, setTemplate] = useState([
        {
            id:1,
            img:'phone.png',
            head:'What is Earnest Money? How Much is Enough?',
            text:'Earnest money shows the seller that you are in an agreement to buy their house. Find out all about earnest money and how to ensure you don',
        },
        {
            id:2,
            img:'employees.png',
            head:'What Are Real Estate Closing Costs?',
            text:'Closing costs are the expenses that buyers and sellers incur to finalize a transaction. Costs average between 2% and 5% of the mortgage amount.',
        },
        {
            id:3,
            img:'buildings.png',
            head:'What is Title Search and Title Insurance?',
            text:'Learn more about the title search process and the purpose of title insurance. Here is why you may need it when owning a home.',
        },
        {
            id:4,
            img:'worker.png',
            head:'What to Expect From a Home Inspection',
            text:'Find out what you should expect on inspection day. Learn more about home inspection costs and how you can prepare your home.',
        },

    ])
    return(
        <>
        <div className="flex mt-40 max-md:flex-wrap max-[380px]:relative max-[380px]:bottom-56">
            {template.map(item => (
                <>
                <div className='p-8 max-[380px]:relative max-[380px]:left-20'>
                <img className='w-84 h-48 rounded-3xl mb-4' src={item.img} alt="photo" />
                <Typography variant='h5'>{item.head}</Typography>
                <Typography className='mt-4'>{item.text}</Typography>
            </div>
                </>
            ))}
        </div>
        </>
    )
}

export default Questions