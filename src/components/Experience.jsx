import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AnimatedBox = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",

        color: "white",
        px: { xs: 2, sm: 3 },
        py: 8,
        fontFamily: '"Inter", "Roboto", "Poppins", sans-serif',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        align="center"
        gutterBottom
        sx={{ mb: 6 }}
      >
        Experience & Education
      </Typography>

      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
        <VerticalTimeline layout="2-columns">
          {/* UVic */}
          <VerticalTimelineElement
            date="Sep 2025 – Aug 2026"
            position="right"
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            contentStyle={{
              background: "#1e293b",
              color: "#fff",
              padding: "20px 24px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            icon={<SchoolIcon />}
          >
            <AnimatedBox>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Box
                  component="img"
                  src="/assets/uvic.png"
                  alt="UVic"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  M.Eng. in Applied Data Science
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                University of Victoria
              </Typography>
            </AnimatedBox>
          </VerticalTimelineElement>

          {/* Mathnasium */}
          <VerticalTimelineElement
            date="Sep 2024 – May 2025"
            position="left"
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{
              background: "#1e293b",
              color: "#fff",
              padding: "20px 24px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #334155" }}
            icon={<WorkIcon />}
          >
            <AnimatedBox>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}
              >
                <Box
                  component="img"
                  src="/assets/mathnasium.png"
                  alt="Mathnasium"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Math Instructor
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Mathnasium, Lynnwood, WA
              </Typography>
              <Typography variant="body2">
                Taught K–12 students core math concepts in a structured learning
                environment. Adapted instruction based on individual needs.
              </Typography>
              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  label="Teaching"
                  size="small"
                  sx={{ backgroundColor: "#64748b", color: "#fff" }}
                />
                <Chip
                  label="K–12 Math"
                  size="small"
                  sx={{ backgroundColor: "#64748b", color: "#fff" }}
                />
              </Box>
            </AnimatedBox>
          </VerticalTimelineElement>

          {/* Bilimetrix */}
          <VerticalTimelineElement
            date="Jul 2024 – Sep 2024"
            position="left"
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{
              background: "#1e293b",
              color: "#fff",
              padding: "20px 24px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            icon={<WorkIcon />}
          >
            <AnimatedBox>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Box
                  component="img"
                  src="/assets/bilimetrix.png"
                  alt="Bilimetrix"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Software Engineer Intern
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Bilimetrix USA, Seattle, WA
              </Typography>
              <Typography variant="body2">
                Wrote unit tests with .NET ML, improved test accuracy to 96%,
                fixed web bugs, built full stack features, and worked with
                researchers.
              </Typography>
              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  label=".NET ML"
                  size="small"
                  sx={{ backgroundColor: "#0284c7", color: "#fff" }}
                />
                <Chip
                  label="ASP.NET"
                  size="small"
                  sx={{ backgroundColor: "#0ea5e9", color: "#fff" }}
                />
                <Chip
                  label="HTML5"
                  size="small"
                  sx={{ backgroundColor: "#f97316", color: "#fff" }}
                />
              </Box>
            </AnimatedBox>
          </VerticalTimelineElement>

          {/* Amazon */}
          <VerticalTimelineElement
            date="Sep 2023 – Jun 2024"
            position="left"
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{
              background: "#1e293b",
              color: "#fff",
              padding: "20px 24px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            icon={<WorkIcon />}
          >
            <AnimatedBox>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Box
                  component="img"
                  src="/assets/amazon.png"
                  alt="Amazon"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Software Development Engineer Intern
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Amazon, Seattle, WA
              </Typography>
              <Typography variant="body2">
                Built Alexa moderation tool using React, Node.js, AWS.
                Integrated APIs, OAuth, and reduced onboarding from days to
                minutes.
              </Typography>
              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  label="React"
                  size="small"
                  sx={{ backgroundColor: "#3b82f6", color: "#fff" }}
                />
                <Chip
                  label="Node.js"
                  size="small"
                  sx={{ backgroundColor: "#10b981", color: "#fff" }}
                />
                <Chip
                  label="AWS"
                  size="small"
                  sx={{ backgroundColor: "#facc15", color: "#000" }}
                />
              </Box>
            </AnimatedBox>
          </VerticalTimelineElement>

          {/* Seattle U */}
          <VerticalTimelineElement
            date="2019 – Jun 2024"
            position="right"
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            contentStyle={{
              background: "#1e293b",
              color: "#fff",
              padding: "20px 24px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            icon={<SchoolIcon />}
          >
            <AnimatedBox>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Box
                  component="img"
                  src="/assets/seattleu.png"
                  alt="Seattle University"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  B.Sc. in Computer Science
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Seattle University
              </Typography>
              <Typography variant="body2">GPA: 3.61</Typography>
            </AnimatedBox>
          </VerticalTimelineElement>

          {/* Smartfren */}
          <VerticalTimelineElement
            date="Jun 2023 – Aug 2023"
            position="left"
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{
              background: "#1e293b",
              color: "#fff",
              padding: "20px 24px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            icon={<WorkIcon />}
          >
            <AnimatedBox>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Box
                  component="img"
                  src="/assets/smartfren.png"
                  alt="Smartfren"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Software Developer Intern
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Smartfren Telecom (Remote)
              </Typography>
              <Typography variant="body2">
                Revamped website using Next.js, React, Tailwind. Integrated APIs
                and improved engagement by 30%.
              </Typography>
              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  label="Next.js"
                  size="small"
                  sx={{ backgroundColor: "#8b5cf6", color: "#fff" }}
                />
                <Chip
                  label="Tailwind"
                  size="small"
                  sx={{ backgroundColor: "#06b6d4", color: "#fff" }}
                />
                <Chip
                  label="Figma"
                  size="small"
                  sx={{ backgroundColor: "#64748b", color: "#fff" }}
                />
              </Box>
            </AnimatedBox>
          </VerticalTimelineElement>

          {/* Shoreline */}
          <VerticalTimelineElement
            date="Apr 2021 – Jun 2022"
            position="right"
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            contentStyle={{
              background: "#1e293b",
              color: "#fff",
              padding: "20px 24px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            icon={<SchoolIcon />}
          >
            <AnimatedBox>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Box
                  component="img"
                  src="/assets/shoreline.png"
                  alt="Shoreline"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  A.A. in Computer Science
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Shoreline Community College
              </Typography>
              <Typography variant="body2">GPA: 3.84</Typography>
            </AnimatedBox>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Experience;
