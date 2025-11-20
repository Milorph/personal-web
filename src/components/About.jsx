import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        mt: 5,
        px: { xs: 3, sm: 10 },
        py: { xs: 8, sm: 12 },
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Left/Right Section Wrapper */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: window.innerWidth < 900 ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: window.innerWidth < 900 ? "24px" : "48px",
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            sx={{
              width: { xs: "85%", md: 380 },
              height: { xs: 500, sm: 600, md: 680 },
              borderRadius: "30px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              transition: "transform 0.4s ease",
              "&:hover": { transform: "scale(1.05)" },
              "&::before": {
                content: '""',
                position: "absolute",
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                zIndex: -1,
                borderRadius: "40px",
                background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                filter: "blur(20px)",
                opacity: 0,
                transition: "opacity 0.4s ease",
              },
              "&:hover::before": { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src="profile.jpg"
              alt="About Me"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Box
            sx={{
              maxWidth: 650,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              fontWeight="800"
              sx={{
                fontFamily: "'Oswald', sans-serif",
                mb: 6,
                textAlign: "center",
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              I’ve been lucky to see a bit of the world — born in Indonesia,
              raised in Singapore, studied in the U.S., and now based in Canada.
              <br />
              <br />
              I enjoy video games, especially FPS, MOBA and MMORPGs and building
              little tools or scripts to automate things in my life — whether
              it’s organizing files, tracking habits, or just simplifying tasks.
              <br />
              <br />I love learning, experimenting, and turning small ideas into
              working things. This site is my space to share a bit of that.
            </Typography>

            {/* Interests Section */}
            <Box
              sx={{
                mt: 4,
                px: 3,
                py: 3,
                borderRadius: 8,
                backgroundColor: "#e2e8f0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 2, color: "#0f172a" }}
              >
                💡 Interests
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {[
                  "Software Engineering",
                  "Data Visualization",
                  "Algorithms",
                  "Machine Learning",
                  "System Design",
                  "UI/UX Design",
                ].map((interest, index) => (
                  <Typography
                    component="span"
                    key={index}
                    sx={{
                      px: 2.5,
                      py: 1.2,
                      fontSize: "1rem",
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      color: "#0f172a",
                      background: "rgba(255, 255, 255, 0.4)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "999px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {interest}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default About;
