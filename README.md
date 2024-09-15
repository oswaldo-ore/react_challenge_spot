
# React Project with Vite

This is a basic React project created with Vite and TypeScript. It uses Bootstrap for styling and React Router for routing.

## Requirements

- Node.js
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/oswaldo-ore/react_challenge_spot.git
   cd your-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. To build the project for production:

   ```bash
   npm run build
   ```

## Environment Variables Setup

Make sure to configure the `.env` file in the root of the project:

```env
VITE_API_URL=https://api-shorturl.tecnosoft.xyz/api/admin
```

## Project Structure

```bash
src/
├── components/    # Reusable components
├── pages/         # Application pages
├── services/      # API request logic
├── App.tsx        # Main component
└── main.tsx       # Entry point
```

## Deployment with Vercel

To deploy the project using Vercel, follow these steps:

1. Install the Vercel CLI globally on your system:

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:

   ```bash
   vercel login
   ```

3. Deploy your project:

   ```bash
   vercel
   ```

   Vercel will guide you through the configuration process, and once completed, your project will be deployed.

4. To build the project for production and deploy it:

   ```bash
   npm run build
   vercel
   ```

   Vercel will automatically detect the build and deploy configuration from your project settings.

## License

This project is licensed under the MIT License.
