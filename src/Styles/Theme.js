const BORDER_RADIUS = "4px";
const BOX_BORDER = "1px solid #CED4DA";
const SIZE = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export default {
  bgColor: "#F1F3F5",
  blackColor: "#343A40",
  greyColor: "#757575",
  lightGreyColor: "#CED4DA",
  blueColor: "#3897F0",
  darkBlueColor: "#003568",
  boxBorder: BOX_BORDER,
  borderRadius: "4px",
  whiteBox: `border-radius:${BORDER_RADIUS};
               border:${BOX_BORDER};
               background-color:white;
   `,
  mobileS: `(min-width: ${SIZE.mobileS})`,
  mobileM: `(min-width: ${SIZE.mobileM})`,
  mobileL: `(min-width: ${SIZE.mobileL})`,
  tablet: `(min-width: ${SIZE.tablet})`,
  laptop: `(min-width: ${SIZE.laptop})`,
  laptopL: `(min-width: ${SIZE.laptopL})`,
  desktop: `(min-width: ${SIZE.desktop})`,
  desktopL: `(min-width: ${SIZE.desktopL})`
};
