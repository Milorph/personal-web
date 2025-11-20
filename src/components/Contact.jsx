import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        color: "white",
        fontFamily: '"Inter", "Roboto", "Poppins", sans-serif',
        px: 2,
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        fontWeight="800"
        letterSpacing={1.5}
        align="center"
        sx={{ mb: 2 }}
      >
        Contact Me
      </Typography>

      {/* Formspree-connected form card */}
      <Paper
        elevation={8}
        sx={{
          px: 4,
          py: 5,
          borderRadius: 4,
          width: { xs: "90%", sm: "450px" },
          backgroundColor: "#1e293b",
          color: "white",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.4), 0 0 30px rgba(124, 58, 237, 0.2)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          component="form"
          action="https://formspree.io/f/mqabjrey"
          method="POST"
          sx={{ width: "100%" }}
        >
          <Stack spacing={3}>
            <TextField
              fullWidth
              variant="filled"
              name="name"
              label="Your Name"
              required
              InputProps={{ disableUnderline: true }}
              sx={{ backgroundColor: "#f1f5f9", borderRadius: 2 }}
            />
            <TextField
              fullWidth
              variant="filled"
              name="email"
              type="email"
              label="Your Email"
              required
              InputProps={{ disableUnderline: true }}
              sx={{ backgroundColor: "#f1f5f9", borderRadius: 2 }}
            />
            <TextField
              fullWidth
              variant="filled"
              name="message"
              label="Message"
              multiline
              rows={4}
              required
              InputProps={{ disableUnderline: true }}
              sx={{ backgroundColor: "#f1f5f9", borderRadius: 2 }}
            />
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                background: "linear-gradient(to right, #14b8a6, #6366f1)",
                color: "white",
                boxShadow: "0 4px 12px rgba(20, 184, 166, 0.4)",
                "&:hover": {
                  background: "linear-gradient(to right, #0f766e, #4f46e5)",
                  boxShadow: "0 6px 14px rgba(99, 102, 241, 0.5)",
                },
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Paper>

      {/* Social Icons */}
      <Box sx={{ mt: 1 }}>
        <Typography variant="h6" align="center" sx={{ mb: 1 }}>
          Or reach out directly:
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mt: 5 }}
        >
          <ContactIcon
            href="https://www.linkedin.com/in/robert-widjaja/"
            icon={<FaLinkedin />}
            label="LinkedIn"
          />
          <ContactIcon
            href="https://www.instagram.com/robertwwja/"
            icon={<FaInstagram />}
            label="Instagram"
          />
          <ContactIcon
            href="mailto:robertwinstonwidjaja1@gmail.com"
            icon={<FaEnvelope />}
            label="Email"
          />
        </Stack>
      </Box>
      {/* Trademark bottom right */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          fontSize: "0.75rem",
          opacity: 0.6,
          color: "#e2e8f0",
          pointerEvents: "none",
        }}
      >
        © {new Date().getFullYear()} Robert Widjaja™
      </Box>

    </Box>
  );
};

const ContactIcon = ({ href, icon, label }) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      fontSize: 18,
      color: "white",
      textDecoration: "none",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        color: "#60a5fa",
      },
    }}
  >
    <Box sx={{ fontSize: 28 }}>{icon}</Box>
    {label}
  </Box>
  
);

export default Contact;
