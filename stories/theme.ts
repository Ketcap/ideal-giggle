import { NoCodeConfig } from "styled-components";

export const theme: NoCodeConfig = {
  color: {
    primary: "#6E6CC4",
    secondary: "#333333",
    tertiary: "#DDDDDD",
    danger: "#F65849",
  },
  button: {
    variant: ["primary", "secondary", "tertiary", "danger"],
    size: ["small", "medium", "large"],
    fontFamily: "Poppins",
    fontWeight: 400,
    iconSpacing: {
      small: 2,
      medium: 4,
      large: 6,
    },
    fontSize: {
      small: 12,
      medium: 14,
      large: 14,
    },
    background: {
      primary: "#6E6CC4",
      secondary: "#333333",
      tertiary: "#FFFFFF",
      danger: "#F65849",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      tertiary: "#333333",
      danger: "#FFFFFF",
    },
    border: {
      primary: "none",
      secondary: "none",
      tertiary: "1px solid #DDDDDD",
      danger: "none",
    },
    spacing: {
      vertical: {
        small: 6,
        medium: 12,
        large: 16,
      },
      horizontal: {
        small: 12,
        medium: 24,
        large: 36,
      },
    },
    radius: {
      small: 4,
      medium: 4,
      large: 4,
    },
  },
};



// customColors: {
//   socialMedia: {
//     success: "#04C577",
//     facebook: '#2E61E1',
//     twitter: "#56C1F7",
//     instagram: "#C32AA3"
//   },
//   buckets: {
//     racial: '#6202EE',
//     personal: '#FFC53D',
//     explicit: '#F65849',
//     profanity: '#0B1F77',
//     threat: '#141414',
//     other: '#707070'
//   }
// },