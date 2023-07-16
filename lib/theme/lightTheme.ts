import { Rubik } from 'next/font/google';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const rubik = Rubik({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '500', '700'],
  //weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const lightThemeOptions: ThemeOptions = {
  direction: 'rtl',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [rubik.style.fontFamily, 'sans-serif'].join(','),
    subtitle1: {
      fontSize: 14,
      color: '#777777',
    },
    body1: {
      fontWeight: '300',
    },
    body2: {
      fontWeight: 'normal',
    },
    h1: {
      fontWeight: '900',
      fontSize: 30,
      color: '#15142b',
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#15142b',
    },
    h3: {
      fontSize: 20,
      color: '#15142b',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#15142b',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 'normal',
      color: '#15142b',
    },
    body16: {
      color: '#15142b',
      fontSize: 16,
    },
    body16Light: {
      color: '#6f7070',
      fontSize: 16,
    },
    body14: {
      color: '#15142b',
      fontSize: 14,
    },
    body14Light: {
      color: '#6f7070',
      fontSize: 14,
    },
    caption: {
      color: '#15142b',
      fontSize: 12,
    },
    button: {
      color: '#333333',
    },
  },
  rounded: 20,
  chatBlobBorderRadius: '0px 33px 33px 33px',
  chatBlobBorderRadiusReverse: '33px 0px 33px 33px',

  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#21283a',
            borderRadius: '5px',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#15142b',
          textDecorationColor: 'inherit',
          '&:active &:hover': {
            color: '#0070f0',
          },
        },
        button: {
          color: '#0070f0',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          '&.Mui-focusVisible': {
            outline: '2px solid',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#191F2E',
          borderRadius: '5px',
          '&.Mui-disabled': {
            color: '#5E5E5E',
          },
          '&.Mui-selected': {
            backgroundColor: 'none',
          },
        },
        contained: {
          backgroundColor: '#F3F6F6',
          color: 'rgba(0, 0, 0, .87)',
        },
        containedPrimary: {
          backgroundColor: '#28cbff',
          color: '#15142B',
          '&:hover': {
            color: '#FFFFFF',
          },
        },
        containedSecondary: {
          backgroundColor: '#15142B',
          color: '#FFFFFF',
        },
      },
    },

    // pay attention that changes do not reflect across website, then remove redundant commented out code.
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          borderTop: 0,
          borderRight: 0,
          borderLeft: 0,
          borderBottom: '2px solid #ebebeb',
          color: '#15142b',
          '&.Mui-selected': {
            borderBottom: ' 5px solid #15142b',
            backgroundColor: '#FFFFFF',
            // backgroundColor: '#28cbff',
            // border: 'none',
            // borderRadius: '22px !important',
            ':hover': {
              // backgroundColor: '#28cbff',
            },
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '6px 12px',
          [theme.breakpoints.down('md')]: {
            minWidth: '70px',
          },
          [theme.breakpoints.up('md')]: {
            minWidth: '160px',
          },
          '&.Mui-selected ': {
            color: theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '&.MuiTabList-indicator': {
            color: 'primary.dark',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&.Mui-disabled': { WebkitTextFillColor: 'rgba(0,0,0,0.7)' },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#6F7070',
          borderRadius: '5px',
        },
        input: {
          color: '#6F7070',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: '#6F7070',
        },
        root: {
          '&.Mui-focused': {
            color: '#6F7070',
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 7,
          '& .MuiSwitch-switchBase': {
            '&.Mui-checked': {
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: '#28cbff',
                opacity: 1,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#33cf4d',
              border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: 'gray',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.7,
            },
          },
          '& .MuiSwitch-thumb': {
            width: 16,
            height: 16,
            margin: 2,
            border: '1px solid black',
          },
          '& .MuiSwitch-track': {
            borderRadius: '12px',
            backgroundColor: '#dcdcdc',
            opacity: 1,
            border: '1px solid black',
          },
        },
      },
    },
  },
  palette: {
    isDarkTheme: false,
    primary: {
      main: '#28CBFF',
      dark: '#15142B',
      light: '#E0F1FB',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F7C71E',
      dark: '#E69812',
      light: '#FCF8C8',
      contrastText: '#FFFFFF',
      black: '#444444',
    },
    text: {
      primary: '#15142b',
      secondary: '#6f7070',
    },
    background: {
      default: '#FFFFFF',
      secondary: '#F2F6F7',
      primary: '#FFFFFF',
      dark: '#15142b',
    },
    default: {
      main: '#F2F2F2',
    },
    warning: {
      main: '#FFC727',
    },
    info: {
      main: '#E1F1FB',
    },
    dividerLine: {
      main: '#6F7070',
    },
    colors: {
      softGreen: '#84c96d',
      lightBlue: '#87b7ee',
      black10: 'rgba(0, 0, 0, 0.1)',
      mainBlue: '#07b9e0',
      secVeryLightBlue: '#e4f0fa',
      generalRed: '#f30000',
      mainDeepBlue: '#070a3a',
      secDarkBlue: '#191f2e',
      secLightYellow: '#fbf8cd',
      secLightBlue: '#82cefa',
      generalNotWhite: '#f5f5f5',
      white: '#fff',
      generalDarkGray: '#979797',
      textBlueDark: '#15142b',
      blueDark: '#15142b',
      mainYellow: '#efc94a',
      textGray: '#6f7070',
    },
  },
};

export type TComponentColor =
  | 'inherit'
  | 'default'
  | 'success'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'info'
  | 'error'
  | undefined;

export type TComponentVariant = 'contained' | 'outlined' | 'text';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  ...lightThemeOptions,
});
