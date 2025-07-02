import React from 'react';
import styles from './TeamSection.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import shivamImg from '../../../public/assests/img/shivam.png';
import Image from 'next/image';

const team = [
  {
    name: 'Shivam Sharma',
    title: 'Managing Director',
    img: shivamImg,
  },
  {
    name: 'Vivek Agrawal',
    title: 'Operation Manager',
    img: shivamImg, // Replace with actual image
  },
  {
    name: 'Pankaj Sharma',
    title: 'Marketing Manager',
    img: shivamImg, // Replace with actual image
  },
  {
    name: 'Vijendra Kumar',
    title: 'Event Manager',
    img: shivamImg, // Replace with actual image
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
    gutter: 30,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
    gutter: 20,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    gutter: 10,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    gutter: 5,
  },
};

const TeamSection = () => {
  return (
    <div className="container innerContainer">
      <div className={styles.teamSection}>
        <div className={styles.teamHeader}>
          <h2 className={styles.heading}>Meet Our Team</h2>
          <button className={styles.viewAllBtn}>View all team members</button>
        </div>
        <div className={styles.carouselWrapper}>
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            showDots={true}
            keyBoardControl={true}
            containerClass={styles.carousel}
            itemClass={styles.cardItem}
            dotListClass={styles.carouselDots}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
          >
            {team.map((member, idx) => (
              <div className={styles.card} key={idx}>
                <div className={styles.cardImgWrapper}>
                  <Image src={member.img} alt={member.name} className={styles.cardImg} fill style={{objectFit:'cover'}} />
                  <div className={styles.cardOverlay}></div>
                  <div className={styles.cardText}>
                    <div className={styles.cardName}>{member.name}</div>
                    <div className={styles.cardTitle}>{member.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TeamSection; 