import React, { useState, useCallback, Fragment, Suspense, lazy } from "react";
import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import withAuth from "./shared/components/WithAuth"
import GuestNavBar from "./logged_out/navigation/GuestNavBar";
import UserNavBar from "./logged_in/navigation/UserNavBar";
import smoothScrollTop from "./shared/functions/smoothScrollTop";

const LoggedInComponent = withAuth(lazy(() => import("./logged_in/Main")));

const LoggedOutComponent = lazy(() => import("./logged_out/Main"));

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [dialogOpen, setDialogOpen] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title =
      "FitConnect";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);


  const openLoginDialog = useCallback(() => {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const closeDialog = useCallback(() => {
    setDialogOpen(null);
  }, [setDialogOpen]);

  const openRegisterDialog = useCallback(() => {
    setDialogOpen("register");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const guestNavbarProps = {
    openLoginDialog,
    openRegisterDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
  };

  const userNavbarProps = {
    selectedTab,
  };

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
                  <UserNavBar {...userNavbarProps} />
                  <LoggedInComponent />
                </Route>
                <Route>
                  {isAuthenticated ?
                    <UserNavBar {...userNavbarProps} /> :
                    <GuestNavBar {...guestNavbarProps} />
                  }
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
