import { useEffect, useRef } from 'react';
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./scroll.css";

interface Item {
  spec: string;
  time: string;
  disc: string;
}

interface Props {
  items: Item[];
  text: string;
}

const ScrollComponent = ({ props }: { props: Props }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (sectionRef.current && triggerRef.current && innerRef.current) {
      const totalWidth = innerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      const scrollDistance = totalWidth - viewportWidth;

      const anim = gsap.to(sectionRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => {
        anim.kill();
      };
    }
  }, [props.items.length]);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <h1>{props.text}</h1>
        <div ref={sectionRef} className="scroll-section-inner">
          <div ref={innerRef} className="scroll-wrapper">
            {props.items.map((item, index) => (
              <div className="sl" key={index}>
                <h1>{item.spec}</h1>
                <h2>{item.time}</h2>
                <p>{item.disc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollComponent;
