import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const SliderCarousel = (props) => {
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} >Next</button>;
    };
    const CustomLeftArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} >back</button>;
    };
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <Carousel 
            responsive={responsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            showDots
        >
            {
                props.banners.map((banner, indx) => {
                    return (
                        <div key={indx} style={{width: '100%', height: '400px'}}>
                            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} style={{width: '100%', height:'100%'}} />
                        </div>
                    )
                })
            }
        </Carousel>
    )
}
export default SliderCarousel;