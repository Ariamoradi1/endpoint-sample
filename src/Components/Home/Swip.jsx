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
        name:'Real Estate Agent',
        text:'"I am 70 years of age and have bought and sold several houses. Using Endpoint was by far the easiest and simplest process that I have experienced with a closing company."',
        avatar:'wash.png'
        },
    ])
    return(
        <>
        <div className="mt-20">
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <Card sx={{ maxWidth: 345 }}>
      <Avatar alt="Remy Sharp" src="buyer.png" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Buyer
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “Service was great. A lot of contact and very streamlined.
        It was the easiest close ever! Appreciate the professionalism and ease of the transaction!”
        </Typography>
      </CardContent>
    </Card>
    </SwiperSlide>
      
       </Swiper>
       </div>
        </>
    )
}

export default Swip