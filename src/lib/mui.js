import { createTheme } from "@mui/material/styles";

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#D1F348",
    },
    secondary: {
      main: "#ecfdf3",
    },
    success: {
      main: "#eff8ff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
          fontSize: "14px",
          padding: "7px 23px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            "&:hover": {
              backgroundColor: "#D1F34899",
              boxShadow: "none",
            },
            "&.Mui-focusVisible": {
              boxShadow: "none",
            },
            "& .MuiTouchRipple-child": {
              color: "#00000090",
            },
          },
        },
      ],
    },

    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
          color: "primary",
        },
      },
      styleOverrides: {
        root: {
          width: "100%",
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px transparent inset !important",
            WebkitTextFillColor: "#000 !important",
            caretColor: "inherit",
            transition: "background-color 5000s ease-in-out 0s",
            fontSize: "14px",
          },
          "& .MuiOutlinedInput-input": {
            padding: 0,
            border: "none",
          },
          "& .MuiFormHelperText-root": {
            marginLeft: 0,
            marginTop: -2.5,
          },
          "& .MuiOutlinedInput-root": {
            marginBottom: "15px",
            border: "none",
            borderRadius: "5px",
            padding: "12px 9px",
            fontSize: "14px",
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: "gainsboro",
            },
            "&:focus": {
              border: "1px solid #0079FF",
            },
            "& fieldset": {
              border: "1px solid  #DDDDDD",
            },
            "&:hover fieldset": {
              borderColor: "#0079FF",
              borderWidth: "1px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0079FF",
              borderWidth: "2px",
            },
            "& ::placeholder": {
              color: "#A8A8A8",
              opacity: 1,
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default theme;
