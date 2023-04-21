import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

const Swip = () => {
    const [employee, setEmployee] = useState([
        {id:1,
         name:'Seller',
         text:'Love a to-do list! And everyone was very friendly and patient. Love the chat feature - it feels like someone was always there night or day to answer my questions!"',
         avatar:'seller.png'
        },
        {id:2,
         name:'Buyer',
         text:'“Service was great. A lot of contact and very streamlined. It was the easiest close ever! Appreciate the professionalism and ease of the transaction!”',
         avatar:'buyer.png'
        },
        {id:3,
        name:'Real Estate Agent',
        text:'“Great customer service. They got me set up right away to use the [platform] efficiently. It was great to receive texts while I was on the road so I could stay up to date on my transaction.”',
        avatar:'wash.png'
        },
        {id:4,
        name:'Seller',
        text:'"I am 70 years of age and have bought and sold several houses. Using Endpoint was by far the easiest and simplest process that I have experienced with a closing company."',
        avatar:'seller2.png'
        },
        {id:5,
        name:'Real Estate Agent',
        text:'"Someone is always available to answer my questions. Their customer service and streamlined process make my job much easier."',
        avatar:'man.png'
        },
        {id:6,
        name:'Real Estate Agent',
        text:'"Our transaction was very smooth from start to finish. I love the updates via text and email with the progress on the file."',
        avatar:'lady.png'
        },
        
    ])
    return(
        <>
        <div className="mt-28 h-500 bg-swip flex">
      <Swiper
      className='mt-28'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {employee.map(item => (
          <>
      
      <SwiperSlide className='overflow-hidden'> <Card className='rounded-2xl h-48 ml-450 mt-20' sx={{ maxWidth: 345 }}>
      <Avatar className='ml-3 mt-2' alt="Remy Sharp" src={item.avatar} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.text}
        </Typography>
      </CardContent>
    </Card>
    </SwiperSlide>
          </>
        ))}
       </Swiper>
       </div>
        </>
    )
}

export default Swip