import s from "./Slider.module.css";
import Image from "next/image";
import slider from "../../data/slider";
import { useState } from "react";

const Slider = () => {
  // Slider States
  const [activeSlide, setActiveSlide] = useState(1);

  // Change Slide Function
  const nextSlide = () => {
    if (activeSlide !== slider.length) {
      setActiveSlide((prevState) => prevState + 1);
    } else {
      setActiveSlide(1);
    }
  };

  const prevSlide = () => {
    if (activeSlide !== 1) {
      setActiveSlide((prevState) => prevState - 1);
    } else {
      setActiveSlide(slider.length);
    }
  };

  return (
    <section className={s.slider}>
      <div className="container">
        <div className={s.sectionWrapper}>
          <div className={s.sectionTitleWrapper}>
            <h2 className={s.sectionTitle}>See my best Work</h2>
            <h2 className={s.sectionTitleAlt}>My Work</h2>
            <p className={s.sectionDesc}>
              I had some experience working as a freelancer in the past. Now I
              work full time in Arounda.agency company. Up to this point I have
              experience working in a team, as well as leading a project on my
              own, from the begining stages of development to deploy stage.
            </p>
          </div>
          <div className={s.sliderAddInfo}>
            <div className={s.infoBlock}>
              <h3 className={s.blockTitle}>
                1+ Years of <br />
                experience
              </h3>
            </div>
            <div className={s.infoBlock}>
              <h3 className={s.blockTitle}>
                1+ Years of <br />
                team work
              </h3>
            </div>
            <div className={s.infoBlock}>
              <h3 className={s.blockTitle}>
                2+ Happy <br />
                clients
              </h3>
            </div>
            <div className={s.infoBlock}>
              <h3 className={s.blockTitle}>
                English <br />
                B2+
              </h3>
            </div>
            <div className={s.infoBlock}>
              <h3 className={s.blockTitle}>
                Self taught <br />
                Developer
              </h3>
            </div>
          </div>
        </div>
        <ul className={s.sliderContainer}>
          {/* Slider Buttons */}
          <div className={s.sliderBtns}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={`${s.sliderBtn} ${s.prevSlide}`}
                onClick={prevSlide}
              >
                <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
              </svg>
            </button>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className={`${s.sliderBtn} ${s.nextSlide}`}
                onClick={nextSlide}
              >
                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
              </svg>
            </button>
          </div>
          {/* Slider Indicators */}
          <div className={s.sliderIndicator}>
            {slider.map((item) => (
              <span
                className={`
                ${s.indicator} 
                ${activeSlide === item.id ? s.active : ""}`}
                key={item.id}
              ></span>
            ))}
          </div>
          {/* SLider */}
          <ul className={s.sliderWrapper}>
            {slider.map((item) => (
              <li
                className={`
                  ${s.project} 
                  ${activeSlide === item.id ? s.active : ""} 
                  ${
                    activeSlide === 1 && item.id < slider.length && item.id > 1
                      ? s.nextSlide
                      : ""
                  }
                  ${
                    activeSlide === 1 && item.id === slider.length
                      ? s.prevSlide
                      : ""
                  }
                  ${
                    activeSlide > 1 &&
                    activeSlide < slider.length &&
                    item.id === 1
                      ? s.prevSlide
                      : ""
                  }
                  ${
                    activeSlide > 1 &&
                    activeSlide < slider.length &&
                    item.id === slider.length
                      ? s.nextSlide
                      : ""
                  }
                  ${
                    activeSlide === slider.length &&
                    item.id > 1 &&
                    item.id < slider.length
                      ? s.prevSlide
                      : ""
                  }
                  ${
                    activeSlide === slider.length && item.id === 1
                      ? s.nextSlide
                      : ""
                  }
                `}
                key={item.id}
              >
                <div className={s.bannerWrapper}>
                  <Image
                    src={item.projectBanner}
                    alt={item.projectAlt}
                    layout="fill"
                    priority
                    className={s.projectBanner}
                  />
                </div>
                <div className={s.projectDesc}>
                  <div className={s.titleWrapper}>
                    <div className={s.tagsWrapper}>
                      {item.projectTag.map((item, index) => (
                        <div className={s.projectTag} key={index}>
                          <span className={s.tagName}>{item.tag}</span>
                          <span className={s.dote}></span>
                        </div>
                      ))}
                    </div>
                    <h3 className={s.projectTitle}>{item.sliderTitle}</h3>
                  </div>
                  <ul className={s.projectStack}>
                    {item.projectStack.map((stack, index) => (
                      <span className={s.stackItemWrapper} key={index}>
                        <Image
                          src={stack.item}
                          alt="tool"
                          layout="fixed"
                          className={s.stackItem}
                        />
                      </span>
                    ))}
                  </ul>
                  <div className={s.btnWrapper}>
                    <a href={item.projectLink} target="_blank" rel="noreferrer">
                      <button className="btn glossy">View Project</button>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
