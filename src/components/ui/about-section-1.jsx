import { useRef } from "react";
import { Glasses, Sparkles } from "lucide-react";
import { TimelineContent } from "./timeline-animation";
import { VerticalCutReveal } from "./vertical-cut-reveal";
import "./about-section-1.css";

const generationCards = [
  {
    id: 1,
    label: "Kids Edit",
    title: "Play-Proof Specs",
    copy: "Flexible, lightweight specs for school hours, screen time, and everyday adventures at Eyecon.",
    image:
      "https://www.specsmakers.in/cdn/shop/files/Untitled-1Artboard3_09b5d5af-b8df-4a64-a415-0c29a3f0a11f.jpg?v=1765781626&width=980",
    shapeClass: "about-showcase__media--squiggle",
  },
  {
    id: 2,
    label: "Youth Trends",
    title: "Statement Shades",
    copy: "Bold sunglasses that balance street style and UV protection for college and weekend looks.",
    image:
      "https://images.unsplash.com/photo-1609179242555-1d7b4b0a568c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shapeClass: "about-showcase__media--flower",
  },
  {
    id: 3,
    label: "Working Pros",
    title: "All-Day Clarity",
    copy: "Computer-friendly glasses with anti-glare coatings designed for long office and studio sessions.",
    image:
      "https://s3.zeelool.com/stylish-eyeglass-frames-for-self-expression-over-contacts-ia0d.jpg",
    shapeClass: "about-showcase__media--petal",
  },
  {
    id: 4,
    label: "Senior Comfort",
    title: "Precision Readers",
    copy: "Elegant reading frames with comfort-first fit so every detail stays crisp and effortless.",
    image:
      "https://s3.zeelool.com/stylish-reading-glasses-senior-men-comfort-ymbs.jpg",
    shapeClass: "about-showcase__media--panel",
  },
];

export default function AboutSection1() {
  const heroRef = useRef(null);

  const revealUp = {
    visible: (index) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: index * 0.15,
        duration: 0.65,
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: 30,
      opacity: 0,
    },
  };

  const revealDown = {
    visible: (index) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: index * 0.15,
        duration: 0.65,
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: -30,
      opacity: 0,
    },
  };

  return (
    <section className="about-showcase" id="about" ref={heroRef}>
      <TimelineContent
        className="about-showcase__ambient"
        animationNum={0}
        customVariants={revealUp}
        timelineRef={heroRef}
      />

      <div className="about-showcase__shell">
        <div className="about-showcase__intro">
          <TimelineContent
            className="about-showcase__kicker"
            animationNum={1}
            customVariants={revealUp}
            timelineRef={heroRef}
          >
            <Sparkles size={16} strokeWidth={2.25} />
            <span>About Eyecon</span>
          </TimelineContent>

          <h2 className="about-showcase__title">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.07}
              staggerFrom="center"
              transition={{ type: "spring", stiffness: 210, damping: 24, delay: 0.2 }}
              containerClassName="about-showcase__title-reveal"
            >
              Every Generation Finds Their Perfect Frame At Eyecon Optics
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            className="about-showcase__lead"
            animationNum={2}
            customVariants={revealUp}
            timelineRef={heroRef}
          >
            From first school glasses to premium readers, we curate shades, glasses,
            and specs for every age with expert fitting and personalized style guidance.
          </TimelineContent>
        </div>

        <div className="about-showcase__grid">
          {generationCards.map((card, index) => (
            <TimelineContent
              key={card.id}
              as="article"
              className="about-showcase__card"
              animationNum={index + 3}
              customVariants={index % 2 === 0 ? revealUp : revealDown}
              timelineRef={heroRef}
            >
              <figure className={`about-showcase__media ${card.shapeClass}`}>
                <img src={card.image} alt={card.title} loading="lazy" />
              </figure>

              <div className="about-showcase__content">
                <p className="about-showcase__label">{card.label}</p>
                 
              </div>
            </TimelineContent>
          ))}
        </div>
      </div>
    </section>
  );
}
