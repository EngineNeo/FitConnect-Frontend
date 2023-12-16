import React, { Fragment, Suspense, lazy, useEffect, useState } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import withAuth from "./shared/components/WithAuth";

const LoggedInComponent = withAuth(lazy(() => import("./logged_in/Main")));

const LoggedOutComponent = lazy(() => import("./logged_out/Main"));

const LoggedInCoachComponent = withAuth(lazy(() => import("./logged_in_coach/Main")));

const LoggedInAdminComponent = withAuth(lazy(() => import("./logged_in_admin/Main")));

function App() {
  const [userType, setUserType] = useState(localStorage.getItem('user_type') || 'logged_out');

  useEffect(() => {
    // Event listener for auth changes
    const handleAuthChange = () => {
      const storedUserType = localStorage.getItem('user_type');
      setUserType(storedUserType);
      console.log("Retrieved user type from localStorage:", storedUserType);
    };

    // Adding event listener when component mounts
    window.addEventListener('storage', handleAuthChange);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  let ComponentToRender;
  switch(userType) {
    case 'coach':
      ComponentToRender = LoggedInCoachComponent;
      break;
    case 'admin':
      console.log("Switching to Admin Component");
      ComponentToRender = LoggedInAdminComponent;
      break;
    default:
      ComponentToRender = LoggedInComponent;
  }

  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Pace color={theme.palette.primary.light} />
          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route path="/c">
                <ComponentToRender />
              </Route>
              <Route>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;