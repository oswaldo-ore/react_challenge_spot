
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

## License

This project is licensed under the MIT License.
