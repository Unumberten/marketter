import Image from 'next/image';

import EventOne from '/public/potatoes-young-vegetables-wallpaper-preview.jpg';
import EventTwo from '/public/vegetable-field-cabbages-vegetables.jpg';
import EventThree from '/public/hay-bales-hay-straw-bales-straw.jpg';

export default function Event() {
  return (
    <section className='event-container'>
      <div className='subtitle'>
        <span>PROMOTIONS</span>
        <h2>Our Promotions Events</h2>
      </div>
      <div className='event-banner'>
        <div className='event-banner-left'>
          <div className='event-card'>
            <div className='content'>
              <h3>
                GET <br /> UP TO <span>60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image src={EventOne} alt='header' height='218' width='282' />
          </div>
          <div className='event-card'>
            <h3>GET 30% OFF</h3>
            <p>USE PROMO CODE</p>
            <button>DINEWEEKENDSALE</button>
          </div>
        </div>
        <div className='event-banner-right'>
          <div className='event-banner-right-1'>
            <div className='details'>
              <p>Cabbage and Potatoes</p>
              <div className='price'>
                <span>R100.00</span>
                <span>R75.00</span>
              </div>
            </div>
            <Image src={EventTwo} alt='header' height='362' width='282' />
          </div>
          <div className='event-banner-right-2'>
            <div className='details'>
              <p>Hay Baels</p>
              <div className='price'>
                <span>R50.00</span>
                <span>R60.00</span>
              </div>
            </div>
            <Image src={EventThree} alt='header' height='368' width='282' />
          </div>
        </div>
      </div>
    </section>
  );
}
