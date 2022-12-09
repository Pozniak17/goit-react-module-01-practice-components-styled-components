const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    green: 'green',
    red: 'red',
    text: '#2a2a2a',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: 'orange',
    muted: '#f6f6f6',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '20px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    big: '12px',
    round: '50%',
  }, // це для margin, padding
  // spacing: 4,
  spacing: value => `${5 * value}px`,
};

export default theme;
