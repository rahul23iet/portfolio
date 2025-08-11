import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Two-Color Brand Palette */
    --primary-violet: #8B5CF6; /* Violet */
    --primary-cyan: #06B6D4;   /* Sky Blue */

    /* Map any former accents to the two-color system for consistency */
    --accent-pink: var(--primary-violet);
    --accent-orange: var(--primary-cyan);
    --accent-emerald: var(--primary-cyan);
    --accent-yellow: var(--primary-violet);
    
    /* Dark Backgrounds (subtle blue-violet hues) */
    --bg-primary: #0E1024;
    --bg-secondary: #141A2F;
    --bg-tertiary: #0F1830;
    --bg-glass: rgba(139, 92, 246, 0.10);
    --bg-card: rgba(255, 255, 255, 0.05);
    
    /* Text Colors */
    --text-primary: #F8FAFC;
    --text-secondary: #E2E8F0;
    --text-muted: #94A3B8;
    --text-accent: var(--primary-violet);
    
    /* Two-Color Gradients */
    --gradient-primary: linear-gradient(135deg, var(--primary-violet) 0%, var(--primary-cyan) 100%);
    --gradient-secondary: linear-gradient(135deg, var(--primary-cyan) 0%, var(--primary-violet) 100%);
    --gradient-accent: var(--gradient-primary);
    --gradient-hero: var(--gradient-primary);
    
    /* Neon / Effects mapped to two-color */
    --neon-cyan: var(--primary-cyan);
    --neon-pink: var(--primary-violet);
    --neon-green: var(--primary-cyan);
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
    background: var(--primary-cyan);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0aa3be;
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
