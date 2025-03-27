# Basic Project

This is a simple React project bootstrapped with Vite. It uses React Router for routing and Material-UI (MUI) for styling. The project is structured to allow easy creation of new components and pages.

## Project Structure

```
basic-project/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── favicon.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   └── pages/
│       ├── Home.jsx
│       ├── NoPage.jsx
│       └── Page1.jsx
```

- **`src/main.jsx`**: Entry point of the application.
- **`src/App.jsx`**: Contains the main routing logic using React Router.
- **`src/pages/`**: Directory for page components.
- **`public/`**: Static assets like the favicon.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd basic-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the project for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

## Adding new pages

To add a new pages:

1. Create a new file in the `src/pages/` directory (or another appropriate directory).
2. Define your pages. For example:

   ```jsx
   // filepath: src/pages/NewPage.jsx
   import { Box, Typography } from "@mui/material";
   import * as React from "react";

   export default function NewPage() {
     return (
       <Box
         sx={{ width: 1, display: "flex", justifyContent: "center", mt: 10 }}
       >
         <Typography sx={{ fontSize: 22 }}>New Page</Typography>
       </Box>
     );
   }
   ```

3. Add a route for the new pages in `src/App.jsx`:

   ```jsx
   import NewPage from "./pages/NewPage";

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/new-page" element={<NewPage />} />
           <Route path="*" element={<NoPage />} />
         </Routes>
       </BrowserRouter>
     );
   }
   ```

4. Add a button to navigate to the new pages in `src/components/MenuBar.jsx`:

   ```jsx
   export default function MenuBar() {
     const navigate = useNavigate();
     return (
       <AppBar position="static">
         <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
           <Button
             onClick={() => navigate("/")}
             color="inherit"
             sx={{ mr: 2, color: "white" }}
           >
             Home
           </Button>
           <Button onClick={() => navigate("/page1")} sx={{ color: "white" }}>
             Page 1
           </Button>
           <Button
             onClick={() => navigate("/new-page")}
             sx={{ color: "white" }}
           >
             New Page
           </Button>
         </Toolbar>
       </AppBar>
     );
   }
   ```

5. Navigate to `/new-page` in your browser to view the new component.

### Using Material-UI Components

This project uses Material-UI for styling. You can import and use any MUI components in your pages. For example:

```jsx
import { Button } from "@mui/material";

<Button variant="contained">Click Me</Button>;
```

### Styling with Material-UI

Material-UI provides a powerful `sx` prop for styling components. The `sx` prop allows you to define inline styles using a JavaScript object, leveraging the theme for consistent design.

#### Example Usage

Here is an example of using the `sx` prop to style a `Box` and a `Typography` component:

```jsx
import { Box, Typography } from "@mui/material";

export default function StyledComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
        padding: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 2,
          color: "blue",
        }}
      >
        Welcome to the Styled Component!
      </Typography>
    </Box>
  );
}
```

### Defining a Theme for Material-UI

To define a custom theme for Material-UI, including custom styles for a components like a button:

1. Create a theme file, e.g., `src/theme.js`:

   ```jsx
   import { createTheme } from "@mui/material/styles";

   const theme = createTheme({
     palette: {
       primary: {
         main: "#1976d2",
       },
       secondary: {
         main: "#dc004e",
       },
     },
     components: {
       MuiButton: {
         styleOverrides: {
           root: {
             borderRadius: 8,
             textTransform: "none",
             padding: "8px 16px",
           },
         },
       },
     },
   });

   export default theme;
   ```

2. Wrap your app with the `ThemeProvider` in `src/main.jsx`:

   ```jsx
   import { ThemeProvider } from "@mui/material/styles";
   import theme from "./theme";

   ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
       <ThemeProvider theme={theme}>
         <App />
       </ThemeProvider>
     </React.StrictMode>
   );
   ```

Now, all `Button` components in your app will use the custom styles defined in the theme.
