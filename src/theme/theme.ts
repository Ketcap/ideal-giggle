export enum ArrayInputs {
  type = "type",
  size = "size",
}
export enum ObjectInputs {
  text = "text",
  spacing = "spacing",
  radius = "radius",
}

export const theme = {
  color: {
    primary: "",
    secondary: "",
    tertiary: "",
  },

  button: {
    variant: ["primary", "secondary", "tertiary", "danger"] as const,
    size: ["small", "medium", "large"] as const,
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

export type DefaultTheme = typeof theme;
