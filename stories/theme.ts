import { NoCodeConfig } from "styled-components";

export const theme: NoCodeConfig = {
  color: {
    primary: "#6E6CC4",
    secondary: "#333333",
    tertiary: "#DDDDDD",
    danger: "#F65849",
    success: "#04C577",
  },
  input: {
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontSize: 16,
    minWidth: 200,
    background: "#fff",
    border: {
      size: 1,
      Default: "#DDD",
      Active: "#6E6CC4",
      Focused: "#6E6CC4",
      Disabled: "#DDD",
      Error: "#F65849",
      Success: "#04C577",
      ReadOnly: "#DDD",
      Hover: "#6E6CC4",
    },
    radius: {
      small: 2,
      medium: 4,
      large: 6,
    },
    iconSpacing: 8,
    spacing: {
      horizontal: {
        small: 8,
        medium: 16,
        large: 24,
      },
      vertical: {
        small: 8,
        medium: 8,
        large: 8,
      },
    },
  },
  button: {
    variant: ["primary", "secondary", "tertiary", "danger", "success"],
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
      success: "#04C577",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      tertiary: "#333333",
      danger: "#FFFFFF",
      success: "#FFFFFF",
    },
    border: {
      primary: "1px solid #DDDDDD",
      secondary: "none",
      tertiary: "1px solid #DDDDDD",
      danger: "none",
      success: "none",
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
