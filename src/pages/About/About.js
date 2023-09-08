import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Styles from "./About.module.css";
import { Box, Divider, Typography } from "@mui/material";
import HourglassFullIcon from '@mui/icons-material/HourglassFull';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={Styles.LazyLoading}>
          <button>Loading... </button>
        </div>
      ) : (
        <Layout>
          <Box
            sx={{
              my: 5,
              textAlign: "center",
              p: 2,
              "& h4": {
                fontWeight: "bold",
                my: 2,
                fontSize: "2rem",
              },
              "& h5": {
                fontWeight: "bold",
              },
              "& p": {
                textAlign: "justify",
              },
            }}
          >
            <Typography variant="h4">Welcome to my Restaurant</Typography>
            <p>
              The Capital’s Palace Since 1983. Nestled amidst the heart of the
              historic Indian capital city, the iconic Taj Palace, New Delhi has
              held a distinguished position amongst the finest hotels of the
              world for close to four decades. Spread over six acres of lush
              gardens, our 5 star hotel in Delhi is synonymous with timeless
              luxury and unmatched hospitality. With panoramic views of the
              city's verdant protected greens, our hotel in Delhi offers an
              inimitable confluence of epitomising elements of Indian art, warm,
              personalised service and unmatched luxury. Four award-winning
              restaurants featuring an array of cuisines from across the world,
              a stylish bar, nine-hole putting greens, a temperature-controlled
              swimming pool and an expansive J Wellness Circle make Taj Palace,
              New Delhi, a true urban oasis. In line with our sustainability
              efforts, a highly specialised electronic air filtration system
              helps maintain the air quality in the hotel, as per international
              AQI standards, so that you only breathe the purest air. Indulge
              yourself with personalised butler service, exclusive access to the
              Taj Club Lounge and other special privileges when you stay in our
              Taj Club Rooms and Suites. Host to the finest events and
              convention centre in Delhi, Taj Palace, New Delhi features the
              capital’s most coveted venues – a spectrum of 11 indoor venues and
              two manicured lawns.
            </p>
            <Divider />
            <Typography variant="h5">Superior Rooms</Typography>
            <p>
              With classic interiors that exemplify timelessness along with
              calming views of the city, the elegantly designed Superior Rooms
              are the perfect retreat, whether you’re travelling for leisure or
              for work. Adorned with elements of art and exquisite Indian
              motifs, our cherished Deluxe Rooms offer calming views of the lush
              cityscape. Unwind amidst sheer comfort and sophistication whether
              you’re on holiday or on business.
            </p>
            <Divider />
            <Box className={Styles.Image_Section}>
              <img
                className={Styles.image}
                src="https://images2.alphacoders.com/862/862730.jpg"
              />
              <img
                className={Styles.image}
                src="https://wallpaperaccess.com/full/7066812.jpg"
              />
              <img
                className={Styles.image}
                src="https://content.pymnts.com/wp-content/uploads/2016/05/Hotel-Room-Secondary-Market-1000x600.jpg"
              />
            </Box>
          </Box>
        </Layout>
      )}
    </>
  );
}
