import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./testimonials-columns-1.css";
import blob from "../assets/blob-e.webp";

const testimonials = [
  {
    quote:
      "My son got his first pair of anti-glare specs from Eyecon. The team explained lens care so clearly and the fit is perfect for school.",
    author: "Meera Joshi",
    role: "Parent, Bhopal",
    company: "Bhopal",
    image:
      "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "I wanted lightweight office glasses for daily laptop use. Eyecon suggested blue-filter lenses and I genuinely feel less strain by evening.",
    author: "Raghav Sharma",
    role: "Software Engineer, Indore",
    company: "Indore",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "Their sunglass collection has great style options for college. I found a frame that looks premium and still fits my student budget.",
    author: "Aanya Kapoor",
    role: "Student, Delhi",
    company: "Delhi",
    image:
      "https://images.unsplash.com/photo-1609179242555-1d7b4b0a568c?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "I needed progressive lenses for reading and driving. The prescription accuracy and frame comfort are both excellent.",
    author: "Suresh Nair",
    role: "Retired Banker, Kochi",
    company: "Kochi",
    image:
      "https://images.unsplash.com/photo-1567934872913-aacea74458b7?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "Eyecon helped me choose minimal frames that match formal wear and festive outfits. The finish quality is top class.",
    author: "Priyanka Iyer",
    role: "Architect, Bengaluru",
    company: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "Great consultation, no rush, and very honest recommendations. My polarized shades are now my daily drive essential.",
    author: "Arjun Singh",
    role: "Entrepreneur, Jaipur",
    company: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "I purchased lightweight readers for my mother and stylish specs for myself in one visit. Truly a family-friendly store.",
    author: "Nidhi Patel",
    role: "Teacher, Ahmedabad",
    company: "Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "The frame adjustment service is excellent. Even after weeks of use, they fine-tuned the fit in minutes.",
    author: "Kabir Malhotra",
    role: "Consultant, Mumbai",
    company: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=240&q=80",
  },
  {
    quote:
      "I was looking for elegant cat-eye glasses and got exactly what I wanted. Eyecon has tasteful designs and helpful staff.",
    author: "Sana Ali",
    role: "Content Creator, Hyderabad",
    company: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  },
];

export default function TestimonialsColumnsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 200 });
  const numberX = useTransform(x, [-220, 220], [-18, 18]);
  const numberY = useTransform(y, [-220, 220], [-10, 10]);

  const current = testimonials[activeIndex];

  const handleMouseMove = (event) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.section
        id="testimonials"
        className="testimonials-design"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="testimonials-design__shell"
          onMouseMove={handleMouseMove}
          ref={sectionRef}
        >
          <motion.div
            className="testimonials-design__index"
            style={{ x: numberX, y: numberY }}
            aria-hidden="true"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.84, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <div className="testimonials-design__layout">
            <aside className="testimonials-design__rail">
              <span className="testimonials-design__rail-label">Eyecon Reviews</span>
              <div className="testimonials-design__progress">
                <motion.div
                  className="testimonials-design__progress-fill"
                  animate={{ height: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </aside>

            <div className="testimonials-design__content">
              <header className="testimonials-design__heading-wrap">
                <p className="testimonials-design__kicker">Testimonials</p>
                <h2 className="testimonials-design__title">
                  What India Says About Eyecon Optics
                </h2>
              </header>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="testimonials-design__company"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="testimonials-design__dot" />
                  {current.company}
                </motion.div>
              </AnimatePresence>

              <div className="testimonials-design__quote-wrap">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="testimonials-design__quote"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={`${activeIndex}-${i}`}
                        className="testimonials-design__word"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.46,
                              delay: i * 0.03,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -12,
                            transition: { duration: 0.16, delay: i * 0.012 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="testimonials-design__bottom">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="testimonials-design__person"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.36, delay: 0.12 }}
                  >
                    <img
                      className="testimonials-design__avatar"
                      src={current.image}
                      alt={current.author}
                      width={54}
                      height={54}
                    />
                    <div>
                      <p className="testimonials-design__author">{current.author}</p>
                      <p className="testimonials-design__role">{current.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="testimonials-design__nav">
                  <button
                    type="button"
                    className="testimonials-design__btn"
                    onClick={goPrev}
                    aria-label="Previous testimonial"
                  >
                    <span aria-hidden="true">&larr;</span>
                  </button>
                  <button
                    type="button"
                    className="testimonials-design__btn"
                    onClick={goNext}
                    aria-label="Next testimonial"
                  >
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-design__ticker" aria-hidden="true">
            <motion.div
              className="testimonials-design__ticker-track"
              animate={{ x: [0, -1100] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {new Array(8).fill(0).map((_, i) => (
                <span key={i}>
                  {testimonials.map((item) => item.company).join(" | ")} |
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.div
        className="scoop-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="scoop-top-blue">
          <img src={blob} alt="" />
        </div>
        <div className="scoop-bottom-black" />
      </motion.div>
    </>
  );
}
