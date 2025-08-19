import { useEffect, useRef } from 'react';
import "./scroll.css";
import { headers } from 'next/headers';

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
  const lang = headers().get('accept-language') || 'en';
  const isRu = lang.toLowerCase().startsWith('ru');
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="scroll-section-outer">
      <div>
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
