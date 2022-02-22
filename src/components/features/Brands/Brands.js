import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Slider from 'react-slick';
import './BrandsSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Brands extends React.Component {
  render() {
    const { brands } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <Slider {...settings}>
            {brands.map(brand => {
              return (
                <div key={brand.id.replace('brand-', '')} className={styles.sliderDiv}>
                  <img
                    key={brand.id.replace('brand-', '')}
                    src={`${process.env.PUBLIC_URL}/images/brands/${brand.id}.jpeg`}
                    alt='brand'
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;

/*

return (
      <div className={styles.root}>
        <div className='container'>
          <div className={'row align-items-center ' + styles.brandsBar}>
            <Button className={styles.button}>
              <span className={styles.sign}>&#x2329;</span>
            </Button>
            <ul className={styles.brandsList}>
              {brands.map(brand => {
                return (
                  <li
                    className={styles.brand}
                    key={brand.id.replace('brand-', '')}
                    style={{ backgroundImage: `url('${brand.image}')` }}
                    alt='brand'
                  ></li>
                );
              })}
            </ul>
            <Button className={styles.button}>
              <span className={styles.sign}>&#x232A;</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  */
