import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";

// Animation Variant for Timeline Items
const timelineItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
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
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
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
      </motion.div>

      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
        <VerticalTimeline layout="2-columns">

          {/* Teaching Assistant */}
          <VerticalTimelineElement
            date="Sep 2025 – Present"
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
            <motion.div
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                <Box
                  component="img"
                  src="uvic.png"
                  alt="UVic"
                  sx={{ width: 60, height: 40 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Teaching Assistant
                </Typography>
              </Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                University of Victoria, Victoria, BC
              </Typography>
              <Typography variant="body2">
                Led weekly ECE and CSC labs, guiding 200+ students in coding and circuit design.
              </Typography>
              <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label="Teaching" size="small" sx={{ backgroundColor: "#3B82F6", color: "#fff" }} />
                <Chip label="Circuit Design" size="small" sx={{ backgroundColor: "#2563EB", color: "#fff" }} />
                <Chip label="C++" size="small" sx={{ backgroundColor: "#1E40AF", color: "#fff" }} />
              </Box>
            </motion.div>
          </VerticalTimelineElement>

          {/* UVic Program */}
          <VerticalTimelineElement
            date="Sep 2025 – Aug 2026"
            position="right"
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            contentStyle={{ background: "#1e293b", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
            icon={<SchoolIcon />}
          >
            <motion.div
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box component="img" src="uvic.png" alt="UVic" sx={{ width: 60, height: 40 }} />
                <Typography variant="h6" fontWeight="bold">
                  M.Eng. in Applied Data Science
                </Typography>
              </Box>
              <Typography variant="subtitle1">University of Victoria</Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Mathnasium */}
          <VerticalTimelineElement
            date="Sep 2024 – May 2025"
            position="left"
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{ background: "#1e293b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <motion.div
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                <Box component="img" src="mathnasium.png" alt="Mathnasium" sx={{ width: 60, height: 40 }} />
                <Typography variant="h6" fontWeight="bold">
                  Math Instructor
                </Typography>
              </Box>
              <Typography variant="subtitle1">Mathnasium, Lynnwood, WA</Typography>
              <Typography variant="body2">
                Taught K–12 math using adaptive learning.
              </Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Bilimetrix */}
          <VerticalTimelineElement
            date="Jul 2024 – Sep 2024"
            position="right"
            icon={<WorkIcon />}
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{ background: "#1e293b", color: "#fff" }}
          >
            <motion.div variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={3}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box component="img" src="bilimetrix.png" alt="Bilimetrix" sx={{ width: 60, height: 40 }} />
                <Typography variant="h6" fontWeight="bold">Software Engineer Intern</Typography>
              </Box>
              <Typography variant="subtitle1">Bilimetrix USA, Seattle</Typography>
              <Typography variant="body2">
                Improved ML test accuracy to 96%, added full-stack features, and fixed production bugs.
              </Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Amazon */}
          <VerticalTimelineElement
            date="Sep 2023 – Jun 2024"
            position="left"
            icon={<WorkIcon />}
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{ background: "#1e293b", color: "#fff" }}
          >
            <motion.div variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box component="img" src="amazon.png" alt="Amazon" sx={{ width: 60, height: 40 }} />
                <Typography variant="h6" fontWeight="bold">Software Development Engineer Intern</Typography>
              </Box>
              <Typography variant="subtitle1">Amazon, Seattle WA</Typography>
              <Typography variant="body2">
                Built Alexa moderation tools with AWS, React & Node.js — reducing onboarding from days → minutes.
              </Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Seattle U */}
          <VerticalTimelineElement
            date="2019 – Jun 2024"
            position="right"
            icon={<SchoolIcon />}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            contentStyle={{ background: "#1e293b", color: "#fff" }}
          >
            <motion.div variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box component="img" src="seattleu.png" alt="Seattle U" sx={{ width: 60, height: 40 }} />
                <Typography variant="h6" fontWeight="bold">B.Sc. in Computer Science</Typography>
              </Box>
              <Typography variant="subtitle1">Seattle University</Typography>
              <Typography variant="body2">GPA: 3.61</Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Smartfren */}
          <VerticalTimelineElement
            date="Jun 2023 – Aug 2023"
            position="left"
            icon={<WorkIcon />}
            iconStyle={{ background: "#22c55e", color: "#fff" }}
            contentStyle={{ background: "#1e293b", color: "#fff" }}
          >
            <motion.div variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box component="img" src="smartfren.png" alt="Smartfren" sx={{ width: 60, height: 40 }} />
                <Typography variant="h6" fontWeight="bold">Software Developer Intern</Typography>
              </Box>
              <Typography variant="subtitle1">Smartfren Telecom (Remote)</Typography>
              <Typography variant="body2">
                Revamped UI with Next.js & Tailwind, improved engagement by 30%.
              </Typography>
            </motion.div>
          </VerticalTimelineElement>

          {/* Shoreline */}
          <VerticalTimelineElement
            date="Apr 2021 – Jun 2022"
            position="right"
            icon={<SchoolIcon />}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            contentStyle={{ background: "#1e293b", color: "#fff" }}
          >
            <motion.div variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={7}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Box component="img" src="shoreline.png" alt="Shoreline CC" sx={{ width: 60, height: 40 }} />
                <Typography variant="h6" fontWeight="bold">A.A. in Computer Science</Typography>
              </Box>
              <Typography variant="subtitle1">Shoreline Community College</Typography>
              <Typography variant="body2">GPA: 3.84</Typography>
            </motion.div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </Box>
    </Box>
  );
};

export default Experience;
