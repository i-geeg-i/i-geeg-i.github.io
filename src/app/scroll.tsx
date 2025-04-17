import { useEffect, useRef, useState } from 'react';
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
interface Item {
    spec: string;
    time: string;
    disc: string;
}
interface Props {
    items: Item[];  // Expecting items to be an array of Item objects
    text: string;
}

const ScrollComponent = ({ props }: { props: Props }) => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const amount = useRef(props.items.length)
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // Ensure the refs are valid and elements exist
        if (sectionRef.current && triggerRef.current) {
            console.log(window.innerWidth)
            const pin = gsap.fromTo(sectionRef.current, 
                { translateX: 0 },
                { 
                    translateX: `-${amount.current * 53}vw`, //(window.innerWidth*-0.0386266094 + 115.0643776824)
                    ease: "none", 
                    duration: 1, 
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "5000 top",
                        scrub: 1,
                        pin: true
                    }
                }
            );

            return () => {
                pin.kill();
            };
        }
    }, []);

  return (
    <section className="scroll-section-outer">
        <div ref={triggerRef}>
        <h1>{props.text}</h1>
            <div ref={sectionRef} className='scroll-section-inner'>
                {props.items.map((item, index) => 
                    <div className="sl" key={index}>
                    <h1>{item.spec}</h1>
                    <h2>{item.time}</h2>
                    <p>{item.disc}</p>
                </div>
                )}
            </div>
        </div>
    </section>
  );
};

export default ScrollComponent;
