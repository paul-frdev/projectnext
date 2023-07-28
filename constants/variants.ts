export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

export const fadeIn = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.3 },
  },
};

export const imageZoom = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.2, transition: {  duration: 0.3 } },
};


export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 2,
    },
  },
};

export const itemLi = {
  hidden: { opacity: 0.5 },
  show: { opacity: 1.1 },
};