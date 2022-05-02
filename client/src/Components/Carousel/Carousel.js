import Carousel from 'nuka-carousel';
import './Carousel.styles.scss'
const SliderCarousel = (props) => {
  return (
    <section className="banner-container">
      <Carousel>
        {props.banners.map((banner) => (
          <div key={banner.id} className="carousel_img">
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};
export default SliderCarousel;