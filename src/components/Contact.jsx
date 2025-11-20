import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          fontWeight="800"
          letterSpacing={1.5}
          align="center"
          sx={{ mb: 2 }}
        >
          Contact Me
        </Typography>
      </motion.div>

      {/* Formspree-connected form card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      >
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
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 35 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.8 },
          },
        }}
      >
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

      </motion.div>
    </Box>
  );
};

const ContactIcon = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5 }}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "18px",
      color: "white",
      textDecoration: "none",
      transition: "all 0.3s ease",
    }}
    whileHover={{
      y: -4,
      color: "#60a5fa",
      transition: { duration: 0.2 },
    }}
  >
    <span style={{ fontSize: "28px" }}>{icon}</span>
    {label}
  </motion.a>
);

export default Contact;
