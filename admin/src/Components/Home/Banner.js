import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  
  var settings = {
    // dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const image=[
    {
      image:"https://shopxbd.com/wp-content/uploads/2023/09/Banner-SHOPXBD-3.png"
    },
    {
      image:"https://shopxbd.com/wp-content/uploads/2023/09/NETFLIX-Available-Now-5.png"
    },
    {
      image:"https://shopxbd.com/wp-content/uploads/2023/09/Banner-SHOPXBD-8.png"
    },
    {
      image:"https://shopxbd.com/wp-content/uploads/2023/09/Banner-SHOPXBD-3.png"
    },
    {
      image:"https://shopxbd.com/wp-content/uploads/2023/09/Prime-Video.png"
    },
    {
      image:"https://shopxbd.com/wp-content/uploads/2023/10/Banner-SHOPXBD-11.png"
    }
  ]
  return (
  <div>
      <Slider {...settings}>
        {
          image.map((image)=>{
            return     <div className="relative focus:outline-none  px-5 bg-white">
            <img className="w-[90%] mx-auto h-[280px] focus:outline-none py-5 md:h-[650px]"
              src={image.image}
              alt=""
            />
          </div>
          })
        }      
    </Slider>
   <div className="hidden lg:block">
    
    <div className="grid grid-cols-3 py-5 w-[85%] mx-auto">

      <div className="">
          <div className="grid grid-cols-12">
            <div className="grid col-span-3">
              <h1 className="text-7xl font-bold text-[#FF0000]">01.</h1>
            </div>
            <div className="grid col-span-9 pr-3 pl-1">
            <h1 className="text-2xl font-semibold">Choose Products</h1>
            <p className="text-sm pt-2">Choose your favorite product <br/> from our shop</p>
              </div>
          </div>
      </div>


      <div className="">
          <div className="grid grid-cols-12">
          <div className="grid col-span-3">
            <h1 className="text-7xl font-bold text-[#FF0000]">02.</h1>
          </div>
          <div className="grid col-span-9 pr-3 pl-1">
            <h1 className="text-2xl font-semibold">Easy Payment</h1>
            <p className="text-sm pt-2">Pay though Bkash payment <br/> Getway</p>
          </div>
          </div>
      </div>


      <div className="">
          <div className="grid grid-cols-12">
          <div className="grid col-span-3">
            <h1 className="text-7xl font-bold text-[#FF0000]">03.</h1>
          </div>
          <div className="grid col-span-9 pr-3 pl-1">
            <h1 className="text-2xl font-semibold">Happy Customer</h1>
            <p className="text-sm pt-2">Quality and Customer Satisfaction <br/> is our first Priority</p>
          </div>
          </div>
      </div>

    </div>
   </div>
  </div>
  );
};

export default Banner;
