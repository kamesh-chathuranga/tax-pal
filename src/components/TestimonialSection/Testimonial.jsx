import React from 'react'
import ReviewCard from './ReviewCard'
import style from './Testimonial.module.css'

const Testimonial = () => {
  return (
    <div className={style['testimonial-container']}>
        <div className="testimonialSection">
            <div className="testimonialText">
                <h1>Loved by businesses worldwide.</h1>
                <h3>Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.</h3>
            </div>
            <div className="review-card-container">
                <ReviewCard 
                    text={'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.'}
                    name={'Sheryl Berge'}
                    position={'CEO at Lynch LLC'}
                    profileImg={'avatar-1'}
                />
                <ReviewCard 
                    text={'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.'}
                    name={'Leland Kiehn'}
                    position={'Founder of Kiehn and Sons'}
                    profileImg={'avatar-2'}
                />
                <ReviewCard 
                    text={'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.'}
                    name={'Peter Renolds'}
                    position={'Founder of West Inc'}
                    profileImg={'avatar-3'}
                />
                <ReviewCard 
                    text={'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.'}
                    name={'Amy Hahn'}
                    position={'Director at Velocity Industries'}
                    profileImg={'avatar-4'}
                />
                <ReviewCard 
                    text={'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.'}
                    name={'Erin Powlowski'}
                    position={'COO at Armstrong Inc'}
                    profileImg={'avatar-5'}
                />
                <ReviewCard 
                    text={'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.'}
                    name={'Amy Hahn'}
                    position={'Director at Velocity Industries'}
                    profileImg={'avatar-6'}
                />
            </div> 
        </div>
    </div>
  )
}

export default Testimonial