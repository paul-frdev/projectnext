export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

export const staggerBlockContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
    transition: { type: "tween", duration: 1 },
  },
};

export const imageZoom = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.2, transition: { duration: 0.3 } },
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

export const fadeInLeft = {
  initial: {
    x: 70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const fadeInRight = {
  initial: {
    x: -30,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const fadeInDown = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};


export const RightImageAnim = {
  hidden: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 3, stiffness: 100, damping: 10, delay: 0.7 },
  },
};

export const LeftImageAnim = {
  initial: { x: -100, opacity: 0  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 3, stiffness: 100, damping: 10, delay: 0.7 },
  },
};

export const countVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
