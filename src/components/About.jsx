import React from "react";
import { Box, Typography, Paper } from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: { xs: "85%", md: 380 },
            height: { xs: 500, sm: 600, md: 680 },
            borderRadius: "30px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            transition: "transform 0.4s ease",
            transform: "scale(1)",
            "&:hover": {
              transform: "scale(1.05)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
              zIndex: -1,
              borderRadius: "40px",
              background: "linear-gradient(135deg, #60a5fa, #a78bfa)", // vibrant blue/violet
              filter: "blur(20px)",
              opacity: 0,
              transition: "opacity 0.4s ease",
            },
            "&:hover::before": {
              opacity: 1,
            },
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

        {/* Text */}
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
              mb: 6, // spacing before image+text
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
            Despite all that, I somehow still only speak English fluently and
            only conversational Mandarin and Indonesian.
            <br />
            <br />
            I enjoy video games, especially FPS, MOBA and MMORPGs that I often
            find myself grinding several hours on, and I often find myself
            building little tools or scripts to automate things in my life —
            whether it’s organizing files, tracking habits, or just simplifying
            boring tasks.
            <br />
            <br />I love learning, experimenting, and turning small ideas into
            working things. This site is my space to share a bit of that, along
            with who I am beyond the code.
          </Typography>

          {/* Interests Section */}
          <Box
            sx={{
              mt: 4,
              px: 3,
              py: 3,
              borderRadius: 8,
              backgroundColor: "#e2e8f0", // subtle grey bg
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            {/* Subheading */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                mb: 2,
                color: "#0f172a",
              }}
            >
              💡 Interests
            </Typography>

            {/* Interest Tags */}
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
                    fontFamily: "'Inter', sans-serif", // ← Set to Inter
                    color: "#0f172a", // Optional: tweak if needed
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "999px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    "&:hover": {
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
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
      </Box>
    </Box>
  );
};

export default About;
