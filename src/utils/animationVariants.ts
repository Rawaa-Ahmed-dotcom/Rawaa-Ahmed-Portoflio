
export const floatVariants = (i:number) => ({
  animate: {
    y: [0, -18 - (i % 3) * 6, 0, 10 + (i % 2) * 4, 0],
    x: [0, (i % 2 === 0 ? 1 : -1) * (6 + (i % 4) * 3), 0],
    rotate: [0, (i % 2 === 0 ? 1 : -1) * (1.5 + (i % 3) * 0.8), 0],
    transition: {
      duration: 4 + (i % 4) * 0.7,
      repeat: Infinity,
      ease: "easeInOut" as const ,
      delay: i * 0.15,
    },
  },
});

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

export  const sectionVariant = {
  hidden: { opacity: 0, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};
export const colors = [
  {id : 1 , color : "#61DAFB"},
  {id : 2 , color : "#3178C6"},
  {id : 3 , color : "#ffffff"},
  {id : 4 , color : "#68A063"},
  {id : 5 , color : "#F24E1E"},
  {id : 6 , color : "#38BDF8"},
  {id : 7 , color : "#FFD43B"},
  {id : 8 , color : "#E535AB"},
  {id : 9 , color : "#2496ED"},
  {id : 10 , color : "#BB4BFF"},
  {id : 11 , color : "#F05032"},
  {id : 12 , color : "#47A248"},
];

