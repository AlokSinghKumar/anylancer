import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary   : { main    : '#1B7468' },
        secondary : { main    : '#D27246' },
        text      : { primary : '#242323' },
        info      : { main    : '#ffffff' },
      },
    
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1160,
          xl: 1920,
        },
      },
    
    //   typography: {
    //     fontFamily: [
    //       'Montserrat',
    //       'sans-serif'
    //     ],
    
    //     button: {
    //       textTransform: "none",
    //       fontWeight: "bold"
    //     },
    
    //     body1: {
    //       fontWeight: 422,
    //       fontSize: "18px",
    //       color: "#242323",
    //       fontFamily: ['Montserrat', 'Medium'] // or 'bold'
    //     },
    
    //     body2: {
    //       fontSize: "18px",
    //       letterSpacing: "0.36px",
    //       fontFamily: ['Montserrat', 'Regular'],
    //     },
    
    //     button: {
    //       fontSize: "22px",
    //       letterSpacing: "0.36px",
    //       fontWeight: 20,
    //       fontFamily: ['Montserrat', 'Regular'],
    //     },
    
    //     h3: {
    //       fontSize: "42px",
    //       letterSpacing: "0.36px",
    //       fontWeight: 300,
    //       color: "#242323",
    //       fontFamily: ['Montserrat', 'Normal'],
    //     },
    
    //     h4: {
    //       fontSize: "30px",
    //       letterSpacing: "0.36px",
    //       fontWeight: 300,
    //       fontFamily: ['Montserrat', 'Regular'],
    //     },
    
    //     h5: {
    //       fontSize: "20px",
    //       fontWeight: 600,
    //       color: "black",
    //       textDecoration: "none"
    //     },
    //   },

    //   overrides: {
    //     MuiPaper: {
    //       elevation6: {
    //         // boxShadow: "0px 3px 5px -1px rgba(57, 157, 154, 0.28),0px 6px 10px 0px rgba(57, 157, 154, 0.28),0px 1px 18px 0px rgba(57, 157, 154, 0.28) "
    //         boxShadow: " 0px 3px 26px #00000029"
    //       }
    //     },
    //     MuiButton: {
    //       // text: {
    //       //   borderRadius: "66px",
    //       //   color: 'white',
    //       //   fontSize: "21px",
    //       //   height: 48,
    //       //   padding: '18px 46px',
    //       //   boxShadow: '0px 3px 6px #00000029',
    //       //   backgroundColor: ""
    //       // },
    //       // primary: {
    //       //   backgroundColor: "green"
    //       // }
    //     },
    //   },
    //   profileInfo: {
    //     border: "1px solid #D27246",
    //     borderRadius: "18px",
    //     opacity: "1",
    //     color: "#ffff"
    //   }
});