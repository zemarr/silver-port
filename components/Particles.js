import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
  return (
    <>
      <Particles
        width="100%"
        height="100%"
        style={{height: "100%"}}
        params={{
          particles: {
            number: {
              value: 213,
              density: {
                enable: true,
                value_area: 2604.1872173865,
              },
            },
            color: {
              value: "#4f33fe",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#fff",
              },
              polygon: {
                nb_sides: 11,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 0.16241544246026904,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 4.872463273808071,
                size_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.14430708547789706,
              width: .7,
            },
            move: {
              enable: true,
              speed: .5,
              direction: "right",
              random: false,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: .2,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default Particle;
