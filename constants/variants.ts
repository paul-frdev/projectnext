export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const fadeInUpTitle = {
  initial: {
    y: 5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.3 },
  },
};

export const imageZoom = {
  // initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  // exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
  hover: { scale: 1.2, transition: { duration: 0.3 } },
};
