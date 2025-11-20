import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Slider from "react-slick";
import { motion } from "framer-motion";

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
    { label: "Linux", class: "devicon-linux-plain colored" },
    { label: "VS Code", class: "devicon-vscode-plain colored" },
    { label: "Yarn", class: "devicon-yarn-plain colored" },
  ],
  "ML & Data": [
    { label: ".NET ML", class: "devicon-dotnetcore-plain colored" },
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
  autoplay: true,
  autoplaySpeed: 1,
  slidesToScroll: 1,
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

// Animation variant for each category line
const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2 },
  }),
};

const ToolsAndTechnologies = () => (
  <Box
    id="technologies"
    sx={{
      minHeight: "100vh",
      color: "white",
      px: { xs: 3, md: 6 },
      py: 10,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}
  >
    {/* Title Animation */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Tools & Technologies
      </Typography>
    </motion.div>

    {Object.entries(tools).map(([category, items], index) => {
      const key = category.replace(/\s+/g, "-");

      return (
        <motion.div
          key={category}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
            {category}
          </Typography>

          <Box sx={{ position: "relative", width: "100%" }}>
            <Slider className={`${key}-slider`} {...getSliderSettings(index)}>
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
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        "&:hover i": { animation: "bounce-icon 0.5s ease" },
                      }}
                    >
                      <i className={iconClass} style={{ fontSize: 64 }} />
                    </Box>
                  </Tooltip>
                </Box>
              ))}
            </Slider>
          </Box>
        </motion.div>
      );
    })}
  </Box>
);

export default ToolsAndTechnologies;
