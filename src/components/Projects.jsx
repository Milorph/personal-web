import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


const projects = [
  {
    title: "Aerial Ascent",
    description:
      "A 2D platformer focused on smooth movement, precision, and level progression. Built fully from scratch.",
    tech: ["C++", "OpenGL", "Game Physics"],
    link: "https://github.com/Milorph/Aerial-Ascent",
    image: "/aerial.png"
  },
  {
    title: "Cartify",
    description:
      "A complete e-commerce web application with auth, product pages, and shopping cart flow.",
    tech: ["React", "Node.js", "JavaScript"],
    link: "https://github.com/Milorph/Cartify",
    image: "/cartify.png"
  },
  {
    title: "Facial Attendance Platform",
    description:
      "Face-recognition attendance tracking system built with Python + OpenCV. Includes registration and real-time detection.",
    tech: ["Python", "OpenCV", "ML"],
    link: "https://github.com/Milorph/Facial-Attendance-Platform",
    image: "/facial.png"
  },
  {
    title: "Fair-Share",
    description:
      "A clean, simple receipt-splitting app that calculates individual shares and totals.",
    tech: ["Typescript", "React", "Angular", "Azure"],
    link: "https://github.com/Milorph/fair-share-azure",
    image: "/fairshare.png"
  },
  {
    title: "Network File System",
    description:
      "A Linux-like filesystem simulation with commands and low-level inode/superblock logic.",
    tech: ["C++", "Filesystems", "Linux", "Low-Level Programming"],
    link: "https://github.com/Milorph/Network-File-System",
    image: "/nfs.png"
  },
  {
    title: "DESeq2 Reimplementation",
    description:
      "A partial port of the DESeq2 differential expression pipeline from R/C++ to Python.",
    tech: ["Python", "NumPy", "Bioinformatics", "C++", "R"],
    link: "https://github.com/Milorph/final_proj",
    image: "/deseq2.png"
  }
];


const pastelChips = ["#e0f2fe", "#fde68a", "#fecaca", "#ede9fe", "#dcfce7"];

const Projects = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 12 },
        py: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: "white",
        }}
      >
        Projects
      </Typography>


      {/* 2 rows × 3 columns */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                backgroundColor: "#f9fafb",
                color: "#111827",
                border: "1px solid #e5e7eb",
                boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
                transition: "0.25s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 14px 35px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                  <Box
                  sx={{
                    width: "100%",
                    height: "140px",
                    borderRadius: 3,
                    mb: 2,
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <img
                    src={process.env.PUBLIC_URL + p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>


                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {p.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "0.9rem",
                    color: "#4b5563",
                  }}
                >
                  {p.description}
                </Typography>

                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {p.tech.map((t, i) => (
                    <Chip
                      key={i}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: pastelChips[i % pastelChips.length],
                        color: "#111827",
                        fontWeight: 500,
                        borderRadius: "999px",
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Link
                    href={p.link}
                    target="_blank"
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      bgcolor: "#e0e7ff", // soft pastel indigo
                      color: "#1e1b4b",
                      px: 2,
                      py: 1,
                      borderRadius: "999px",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      border: "1px solid #c7d2fe",
                      transition: "0.2s ease",
                      "&:hover": {
                        bgcolor: "#c7d2fe",
                      },
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 20 }} />
                    GitHub
                  </Link>
                </Box>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
