# MicroLearn

MicroLearn is an online platform for creating and completing micro-courses and skill challenges on various topics including programming, design, personal productivity, marketing, and more. The platform focuses on short, effective courses (5-10 lessons, each up to 10 minutes long) with an emphasis on practical tasks and challenges.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (register, login, logout)
- Course creation and management
- Interactive lessons and challenges
- User dashboard with progress tracking
- Responsive design for various devices

## Tech Stack

- Next.js 13 (App Router)
- React
- TypeScript
- NextUI
- MongoDB
- NextAuth.js for authentication

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB database (local or cloud-based)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/microlearn.git
   cd microlearn
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables) section)

## Running Locally

1. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

MicroLearn can be deployed to various platforms. Here are instructions for deploying to Vercel:

1. Install the Vercel CLI:

   ```
   npm install -g vercel
   ```

2. Login to Vercel:

   ```
   vercel login
   ```

3. Deploy the application:

   ```
   vercel
   ```

4. Follow the prompts to set up your project on Vercel.

5. Set up the necessary environment variables in the Vercel dashboard.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000 # Use your deployment URL in production
```

Make sure to replace the placeholder values with your actual configuration.

## Contributing

We welcome contributions to MicroLearn! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
