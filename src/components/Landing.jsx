import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "./Typewriter";

const Landing = () => {
  // Typewriter logic
  const fullText = "Aspiring Software Developer";
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="landing"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        position: "relative",
      }}
    >
      {/* Glass Avatar */}
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "24px",
          padding: 3,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          zIndex: 1,
        }}
      >
        <Avatar
          alt="Robert Winston Widjaja"
          src="/assets/me.jpg"
          sx={{
            width: { xs: 200, sm: 240, md: 280 },
            height: { xs: 200, sm: 240, md: 280 },
            borderRadius: "50%",
            border: "4px solid rgba(255,255,255,0.4)",
          }}
        />
      </Box>

      {/* Name + Subtitle */}
      <Box sx={{ mt: 4, mb: 8 }}>
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 800,
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "2px",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            }}
          >
            Robert Winston Widjaja
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "white",
              mt: 3,
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              letterSpacing: "1px",
              minHeight: "1.25em",
              whiteSpace: "pre",
            }}
          >
            <Typewriter />
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
          }}
        >
          {/* Let’s Chat */}
          <ScrollLink to="contact" smooth duration={500} offset={-50}>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                fontSize: "1rem",
                background: "linear-gradient(to right, #14b8a6, #6366f1)",
                color: "white",
                boxShadow: "0 4px 12px rgba(20, 184, 166, 0.4)",
                "&:hover": {
                  background: "linear-gradient(to right, #0f766e, #4f46e5)",
                  boxShadow: "0 6px 14px rgba(99, 102, 241, 0.5)",
                },
              }}
            >
              Let’s Chat
            </Button>
          </ScrollLink>

          {/* My Work - VIBRANT STYLE */}
          <Button
            href="https://github.com/Milorph"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "12px",
              fontSize: "1rem",
              background: "linear-gradient(to right, #ff6a00, #ee0979)",
              color: "white",
              boxShadow: "0 4px 12px rgba(255, 106, 0, 0.4)",
              "&:hover": {
                background: "linear-gradient(to right, #e65100, #d81b60)",
                boxShadow: "0 6px 14px rgba(238, 9, 121, 0.6)",
              },
            }}
          >
            My Work
          </Button>
        </Box>
      </Box>

      {/* Side Contact Icons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          right: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          zIndex: 2,
        }}
      >
        <Tooltip title="LinkedIn" arrow placement="left">
          <IconButton
            href="https://www.linkedin.com/in/robert-widjaja/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              transition: "0.3s",
              "&:hover": { color: "#0a66c2" },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email Me" arrow placement="left">
          <IconButton
            href="mailto:robertwinstonwidjaja1@gmail.com"
            sx={{
              color: "white",
              transition: "0.3s",
              "&:hover": { color: "#f87171" },
            }}
          >
            <EmailOutlinedIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Instagram" arrow placement="left">
          <IconButton
            href="https://www.instagram.com/robertwwja/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              transition: "0.3s",
              "&:hover": { color: "#e1306c" },
            }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Cursor Animation */}
      <style>{`
        @keyframes blink {
          0% { opacity: 1 }
          50% { opacity: 0 }
          100% { opacity: 1 }
        }
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-end infinite;
        }
      `}</style>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Oswald:wght@700&display=swap"
        rel="stylesheet"
      />
    </Box>
  );
};

export default Landing;
