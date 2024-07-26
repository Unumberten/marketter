import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Feature from '/public/feature.png';
import { Button } from '../ui/button';

export default function Features() {
  return (
    <section className='features-section'>
      <div className='title'>
        <h1>The Best Produce and Crops around Locally Sourced and grown</h1>
      </div>
      <div className='content'>
        <div className='left'>
          <div className='feature-background'>Different from others</div>
          <div>
            <h3>Using organic Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
          </div>
          <div>
            <h3>100% local Products</h3>
            <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
          </div>
          <div>
            <h3>Modern Farming techniques</h3>
            <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
          </div>
          <div>
            <h3>Discount for Bulk Orders</h3>
            <p>Lorem ipsum dolor sit amt, consectetus adipiscing elit.</p>
          </div>
        </div>
        <div className='right'>
          <Image src={Feature} alt='Feature' width={300} height={350} />
          <div>
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href='/products'>
              <Button>See All Products</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
