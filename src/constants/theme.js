export const colors = {
  primary: {
    pink: "#FF33C5",
    magenta: "#FD00B6",
    lightPink: "#FF95DC",
    purple: "#F764D2",
  },
  neutral: {
    black: "#0c0c0c",
    white: "#ffffff",
    gray: {
      100: "rgba(255, 255, 255, 0.1)",
      200: "rgba(255, 255, 255, 0.2)",
      300: "rgba(255, 255, 255, 0.3)",
      500: "rgba(255, 255, 255, 0.5)",
      800: "rgba(255, 255, 255, 0.8)",
      900: "rgba(255, 255, 255, 0.9)",
    },
  },
};

export const gradients = {
  primary: "linear-gradient(45deg, #FF33C5, #FD00B6)",
  secondary: "linear-gradient(45deg, #F764D2, #FF33C5)",
  hero: "radial-gradient(ellipse at center, rgba(253,0,182,0.6) 0%, rgba(255,149,220,0.4) 30%, rgba(255,255,255,0.1) 70%, transparent 100%)",
  contact: "linear-gradient(135deg, #FD00B6 0%, #FF33C5 50%, #FF95DC 100%)",
};

export const fonts = {
  lalezar:
    '"Lalezar", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
  poppins:
    '"Poppins", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
  inter:
    '"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
};

export const spacing = {
  sections: {
    hero: "832px",
    navbar: "66px",
    discography: "190px",
    events: "120px",
    contact: "90px",
  },
  container: {
    maxWidth: "1328px",
    padding: "44px",
  },
};

export const animations = {
  transitions: {
    fast: "200ms",
    normal: "300ms",
    slow: "500ms",
  },
  easings: {
    default: "ease-in-out",
    bounce: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
