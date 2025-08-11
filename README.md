# 3D React Portfolio

A modern, responsive portfolio website built with React.js featuring 3D elements and particle effects.

## Features

- ✨ Modern and responsive design
- 🎨 3D elements using Three.js and React Three Fiber
- 🌟 Interactive particle background
- 📱 Fully responsive across all devices
- 🎭 Smooth animations with Framer Motion
- 🎯 Clean and intuitive navigation
- 📧 Contact form with validation
- 🚀 Optimized performance

## Technologies Used

- **Frontend**: React.js, React Router
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Particles**: React Particles, TSParticles
- **Styling**: Styled Components
- **Icons**: React Icons
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.js` - Name and title
- `src/components/About.js` - About section content
- `src/components/Projects.js` - Your projects
- `src/components/Contact.js` - Contact information

### Styling
- Colors and themes can be customized in `src/styles/GlobalStyle.js`
- Component-specific styles are in their respective component files

### 3D Elements
- 3D sphere configuration is in `src/components/Hero.js`
- Particle effects configuration is in `src/components/ParticleBackground.js`

## Deployment

### Build for Production
```bash
npm run build
```

The build folder will contain the optimized production build.

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Browser Support

This portfolio supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for 3D components
- Optimized particle system for mobile devices
- Responsive images and assets
- Minimal bundle size with code splitting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
