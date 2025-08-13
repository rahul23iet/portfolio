import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Cursor-inspired Color Palette */
    --primary-gray: #6B7280; /* Medium gray */
    --primary-dark: #1F2937; /* Dark gray */
    --primary-black: #111827; /* Very dark gray/black */

    /* Map any former accents to the gray system for consistency */
    --accent-pink: var(--primary-gray);
    --accent-orange: var(--primary-gray);
    --accent-emerald: var(--primary-gray);
    --accent-yellow: var(--primary-gray);
    
    /* Dark Backgrounds (gray and black tones) */
    --bg-primary: #0F0F0F;
    --bg-secondary: #1A1A1A;
    --bg-tertiary: #2D2D2D;
    --bg-glass: rgba(107, 114, 128, 0.10);
    --bg-card: rgba(255, 255, 255, 0.05);
    
    /* Text Colors */
    --text-primary: #F9FAFB;
    --text-secondary: #E5E7EB;
    --text-muted: #9CA3AF;
    --text-accent: var(--primary-gray);
    
    /* Gray Gradients */
    --gradient-primary: linear-gradient(135deg, var(--primary-gray) 0%, var(--primary-dark) 100%);
    --gradient-secondary: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-gray) 100%);
    --gradient-accent: var(--gradient-primary);
    --gradient-hero: var(--gradient-primary);
    
    /* Effects mapped to gray tones */
    --neon-cyan: var(--primary-gray);
    --neon-pink: var(--primary-gray);
    --neon-green: var(--primary-gray);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Inter', sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: radial-gradient(ellipse at top, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    overflow-x: hidden;
    min-height: 100vh;
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-gray);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4B5563;
  }

  /* Responsive breakpoints */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 13px;
    }
  }
`;

export default GlobalStyle;
