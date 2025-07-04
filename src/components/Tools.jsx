import React, { useEffect, useRef } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Slider from "react-slick";

const tools = {
  Languages: [
    { label: "Python", class: "devicon-python-plain colored" },
    { label: "C++", class: "devicon-cplusplus-plain colored" },
    { label: "JavaScript", class: "devicon-javascript-plain colored" },
    { label: "TypeScript", class: "devicon-typescript-plain colored" },
    { label: "Java", class: "devicon-java-plain colored" },
    { label: "C#", class: "devicon-csharp-plain colored" },
    { label: "PHP", class: "devicon-php-plain colored" },
    { label: "SQL", class: "devicon-mysql-plain colored" },
    { label: "Ruby", class: "devicon-ruby-plain colored" },
    { label: "Go", class: "devicon-go-plain colored" },
    { label: "Rust", class: "devicon-rust-plain colored" },
    { label: "Swift", class: "devicon-swift-plain colored" },
    { label: "Kotlin", class: "devicon-kotlin-plain colored" },
    { label: "Dart", class: "devicon-dart-plain colored" },
    { label: "MATLAB", class: "devicon-matlab-plain colored" },
  ],
  "Frameworks & Libraries": [
    { label: "React", class: "devicon-react-original colored" },
    { label: "Next.js", class: "devicon-nextjs-plain" },
    { label: "Tailwind", class: "devicon-tailwindcss-plain colored" },
    { label: "Bootstrap", class: "devicon-bootstrap-plain colored" },
    { label: "ASP.NET", class: "devicon-dotnetcore-plain colored" },
    { label: "Mocha", class: "devicon-mocha-plain colored" },
    { label: "Express", class: "devicon-express-original" },
    { label: "Redux", class: "devicon-redux-original colored" },
    { label: "Angular", class: "devicon-angularjs-plain colored" },
    { label: "Vue", class: "devicon-vuejs-plain colored" },
    { label: "Flutter", class: "devicon-flutter-plain colored" },
    { label: "Django", class: "devicon-django-plain colored" },
    { label: "Laravel", class: "devicon-laravel-plain colored" },
    { label: "Spring", class: "devicon-spring-original colored" },
  ],
  "Tools & Platforms": [
    { label: "Git", class: "devicon-git-plain colored" },
    { label: "GitHub", class: "devicon-github-original colored" },
    { label: "Docker", class: "devicon-docker-plain colored" },
    { label: "Figma", class: "devicon-figma-plain colored" },
    { label: "Node.js", class: "devicon-nodejs-plain colored" },
    { label: "MongoDB", class: "devicon-mongodb-plain colored" },
    { label: "Postman", class: "devicon-postman-plain colored" },
    { label: "Bash", class: "devicon-bash-plain colored" },
    { label: "Linux", class: "devicon-linux-plain colored" },
    { label: "NPM", class: "devicon-npm-original-wordmark colored" },
    { label: "VS Code", class: "devicon-vscode-plain colored" },
    { label: "Yarn", class: "devicon-yarn-plain colored" },
  ],
  "ML & Data": [
    { label: ".NET ML", class: "devicon-dotnetcore-plain colored" },
    { label: "scikit-learn", class: "devicon-python-plain" },
    { label: "pandas", class: "devicon-python-plain" },
    { label: "PostgreSQL", class: "devicon-postgresql-plain colored" },
    { label: "SQLite", class: "devicon-sqlite-plain colored" },
    { label: "TensorFlow", class: "devicon-tensorflow-original colored" },
    { label: "Jupyter", class: "devicon-jupyter-plain colored" },
    { label: "MATLAB", class: "devicon-matlab-plain colored" },
    { label: "Hadoop", class: "devicon-apache-plain colored" },
  ],
};

const getSliderSettings = (index) => ({
  infinite: true,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1,
  cssEase: "linear",
  pauseOnHover: true,
  rtl: index % 2 === 1,
  dots: false,
  arrows: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 5 } },
    { breakpoint: 960, settings: { slidesToShow: 4 } },
    { breakpoint: 600, settings: { slidesToShow: 3 } },
    { breakpoint: 400, settings: { slidesToShow: 2 } },
  ],
});

const ToolsAndTechnologies = () => {
  const sliderRefs = useRef({});

  useEffect(() => {
    Object.keys(tools).forEach((category) => {
      const key = category.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_]/g, "");
      const container = document.querySelector(`.${key}-slider`);
      if (!container) return;

      const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
          sliderRefs.current[category]?.slickPrev();
        } else {
          sliderRefs.current[category]?.slickNext();
        }
      };

      container.addEventListener("wheel", handleWheel, { passive: false });
      return () =>
        container.removeEventListener("wheel", handleWheel, { passive: false });
    });
  }, []);

  return (
    <Box
      id="technologies"
      sx={{
        minHeight: "100vh",
        mt: 1,
        color: "white",
        px: { xs: 3, md: 6 },
        py: 10,
        fontFamily: '"Inter", "Roboto", "Poppins", sans-serif',
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Tools & Technologies
      </Typography>

      {Object.entries(tools).map(([category, items], index) => {
        const key = category
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9-_]/g, "");
        const fadeColor = "#3b82f6";

        return (
          <Box
            key={category}
            sx={{ maxWidth: 1300, mx: "auto", position: "relative" }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                color: "#FFFFFF",
                mb: 2,
                textAlign: "left",
              }}
            >
              {category}
            </Typography>

            <Box
              sx={{
                position: "relative",
              }}
            >
              <Slider
                ref={(el) => (sliderRefs.current[category] = el)}
                className={`${key}-slider`}
                {...getSliderSettings(index)}
              >
                {items.map(({ class: iconClass, label }) => (
                  <Box key={label} sx={{ px: 1 }}>
                    <Tooltip title={label} arrow>
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          backgroundColor: "#e2e8f0",
                          borderRadius: 3,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                          overflow: "hidden", // ✅ prevents bouncing out
                          "&:hover i": {
                            animation: "bounce-icon 0.5s ease",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 64,
                            height: 64,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i className={iconClass} style={{ fontSize: 64 }} />
                        </Box>
                      </Box>
                    </Tooltip>
                  </Box>
                ))}
              </Slider>

              {/* Fade overlays */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 60,
                  height: "100%",
                  zIndex: 2,
                  pointerEvents: "none",
                  background: `linear-gradient(to right, ${fadeColor}, transparent)`,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 60,
                  height: "100%",
                  zIndex: 2,
                  pointerEvents: "none",
                  background: `linear-gradient(to left, ${fadeColor}, transparent)`,
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ToolsAndTechnologies;
