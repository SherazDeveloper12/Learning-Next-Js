'use client'
import Styles from './heroSection.module.css';

import  Link  from 'next/link';
export default function HeroSection() {

    return (
        <section className={Styles.hero}>
            <div className={Styles.HeroContaienr}>
            <h1>Find & Book the Best Doctors Near You</h1>
            <p>Discover trusted healthcare professionals, read genuine reviews, and book appointments instantly. Your health is our priority.</p>
            <div className={Styles.buttonContainer}>


                  <Link href="/find-doctors"> <button className={Styles.Button} >Find Doctor </button></Link>

            </div>
              </div>
        </section>
    );
}