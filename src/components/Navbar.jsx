import React, { useState } from "react";
import { Link } from "react-scroll";
import { BottomNavigationAction, Paper, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const sections = [
  { label: "Home", icon: <HomeIcon />, to: "landing" },
  { label: "About", icon: <InfoIcon />, to: "about" },
  { label: "Experience", icon: <WorkIcon />, to: "experience" },
  { label: "Tools", icon: <BuildIcon />, to: "tools" },
  { label: "Contact", icon: <ContactMailIcon />, to: "contact" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Paper
      elevation={8}
      sx={{
        position: "fixed",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        backdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
        px: 2,
        py: 1,
        zIndex: 1000,
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {sections.map((section, index) => (
          <Link
            key={section.to}
            to={section.to}
            smooth
            duration={500}
            offset={50}
            spy
            onSetActive={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            style={{ width: "auto" }}
          >
            <BottomNavigationAction
              icon={section.icon}
              sx={{
                minWidth: 0,
                color: "white",
                borderRadius: "50%",
                padding: "10px",
                transition: "all 0.3s ease",
                background:
                  index === activeIndex
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
                "&:hover": {
                  transform: "scale(1.15)",
                  background: "rgba(255, 255, 255, 0.1)",
                },
              }}
              showLabel={false}
            />
          </Link>
        ))}
      </Stack>
    </Paper>
  );
};

export default Navbar;
