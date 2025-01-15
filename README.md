# Customer Experience Platform

A modern, full-featured web application for managing customer experience, reviews, and analytics. Built with React, TypeScript, and Tailwind CSS.

![Dashboard Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.1)

## Features

- 📊 Interactive Dashboard with Real-time Analytics
- ⭐ Customer Reviews Management
- 📰 News Monitoring
- 💬 Issue Tracking
- 👥 Social Media Integration
- 📈 Trend Analysis
- 🔐 Secure Authentication System
- 📱 Responsive Design

## Tech Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd customer-experience-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── lib/              # Utilities and store
├── pages/            # Page components
└── main.tsx          # Application entry point
```

## Authentication

The platform includes a built-in authentication system with:
- Email/Password Sign In
- User Registration
- Session Management
- Protected Routes

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The application is deployed on Netlify and can be accessed at:
https://velvety-semolina-a6fab7.netlify.app/

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)
