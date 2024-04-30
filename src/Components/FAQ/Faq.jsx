import React from 'react'
import Accordion from '../Accordion/Accordion'
import "./Faq.css"

function Faq () {
    return (
        <div className="main-faq">
            <div className="main-faq-one">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="main-faq-two">
                <Accordion title="What is Netflix?" content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!" />
                <Accordion title="How much does Netflix cost?" content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." />
                <Accordion title='Where can i watch?' content="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." />
                <Accordion title='How do i cancel?' content="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
                <Accordion title='What can i watch on netflix?' content="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
                <Accordion title='is netflix good for kids?' content="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." />
            </div>
            <div className="main-faq-three">
                <div>Ready to watch? Enter your email to create or restart your membership.</div>
                <div className="main-faq-three-input">
                    <input type='text' placeholder='Email address' className='faqemail' />
                    <button className='faqbtn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Faq