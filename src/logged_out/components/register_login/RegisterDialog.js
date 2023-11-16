// Add Birth Date Calendar

import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import { FormHelperText, TextField, Button, Checkbox, Typography, 
        FormControlLabel, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import FormDialog from "../../../shared/components/FormDialog";
// import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";
import DTPicker from "../../../shared/components/DateTimePicker";
import classNames from "classnames";

const styles = (theme) => ({
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:enabled:hover": {
      color: theme.palette.primary.white,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.white,
    },
  },
  textBlack: {
    color: theme.palette.common.black,
  },
});

function RegisterDialog(props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState(new Date())
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const { setStatus, theme, onClose, openTermsDialog, status, classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [hasTermsOfServiceError, setHasTermsOfServiceError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerTermsCheckbox = useRef();

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().replace('T', ' ').slice(0, 19);
    setBirthDate(formattedDate);
  };

  const register = useCallback(() => {
    if (!registerTermsCheckbox.current.checked) {
      setHasTermsOfServiceError(true);
      return;
    }
    if (password !== passwordRepeat) {
      setStatus("passwordsDontMatch");
      return;
    }
    setStatus(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const userData = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      // birth_date: birthDate,
      password: password,
    };

    fetch('http://localhost:8000/fitConnect/create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        if (data.status === 'success') {
        } else {
          setStatus(data.error);
        }
      })
      .catch(error => {
        setIsLoading(false);
        setStatus('serverError');
      });
  }, [
    setIsLoading,
    setStatus,
    setHasTermsOfServiceError,
    email,
    password,
    passwordRepeat,
    registerTermsCheckbox,
  ]);

  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open
      headline="Register"
      onFormSubmit={(e) => {
        e.preventDefault();
        register();
      }}
      hideBackdrop
      hasCloseIcon
      content={
        <Fragment>
          <TextField
            InputLabelProps={{
              className: classes.textWhite
            }}
            InputProps={{
              className: classes.textWhite
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={status === "invalidEmail"}
            label="Email Address"
            autoFocus
            autoComplete="off"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            FormHelperTextProps={{ error: true }}
          />
          {/* First Name Field */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value.replace(/[^a-zA-Z]/g, ''))}
          />
          {/* Last Name Field */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value.replace(/[^a-zA-Z]/g, ''))}
          />
          {/* Gender Dropdown */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Gender"
            >
              <MenuItem value="male" className={classNames(classes.textBlack)}>Male</MenuItem>
              <MenuItem value="female" className={classNames(classes.textBlack)}>Female</MenuItem>
              {/* <MenuItem value="other" className={classNames(classes.textBlack)}>Other</MenuItem> Other not currently available on database */} 
            </Select>
          </FormControl>
          <Typography variant="subtitle1" gutterBottom>
            Birth Date
          </Typography>
          <DTPicker
            value={birthDate}
            onChange={handleDateChange}
            renderInput={(props) => <TextField {...props} />}
          />
          <VisibilityPasswordTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={
              status === "passwordTooShort" || status === "passwordsDontMatch"
            }
            label="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (
                status === "passwordTooShort" ||
                status === "passwordsDontMatch"
              ) {
                setStatus(null);
              }
            }}
            helperText={(() => {
              if (status === "passwordTooShort") {
                return "Create a password at least 6 characters long.";
              }
              if (status === "passwordsDontMatch") {
                return "Your passwords dont match.";
              }
              return null;
            })()}
            FormHelperTextProps={{ error: true }}
            isVisible={isPasswordVisible}
            onVisibilityChange={setIsPasswordVisible}
          />
          <VisibilityPasswordTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={
              status === "passwordTooShort" || status === "passwordsDontMatch"
            }
            label="Repeat Password"
            autoComplete="off"
            value={passwordRepeat}
            onChange={(e) => {
              setPasswordRepeat(e.target.value);
              if (
                status === "passwordTooShort" ||
                status === "passwordsDontMatch"
              ) {
                setStatus(null);
              }
            }}
            helperText={(() => {
              if (status === "passwordTooShort") {
                return "Create a password at least 6 characters long.";
              }
              if (status === "passwordsDontMatch") {
                return "Your passwords don't match.";
              }
              return null;
            })()}
            FormHelperTextProps={{ error: true }}
            isVisible={isPasswordVisible}
            onVisibilityChange={setIsPasswordVisible}
          />
          <FormControlLabel
            style={{ marginRight: 0 }}
            control={
              <Checkbox
                color="primary"
                inputRef={registerTermsCheckbox}
                onChange={() => {
                  setHasTermsOfServiceError(false);
                }}
              />
            }
            label={
              <Typography variant="body1">
                I agree to the
                <span
                  className={classes.link}
                  onClick={isLoading ? null : openTermsDialog}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(event) => {
                    // For screenreaders listen to space and enter events
                    if (
                      (!isLoading && event.keyCode === 13) ||
                      event.keyCode === 32
                    ) {
                      openTermsDialog();
                    }
                  }}
                >
                  {" "}
                  terms of service
                </span>
              </Typography>
            }
          />
          {hasTermsOfServiceError && (
            <FormHelperText
              error
              style={{
                display: "block",
                marginTop: theme.spacing(-1),
              }}
            >
              In order to create an account, you have to accept our terms of
              service.
            </FormHelperText>
          )}
          {/* {status === "accountCreated" (
            <HighlightedInformation>
              We have created your account. Please click on the link in the
              email we have sent to you before logging in.
            </HighlightedInformation>
          )} */}
        </Fragment>
      }
      actions={
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          color="secondary"
          disabled={isLoading}
        >
          Register
          {isLoading && <ButtonCircularProgress />}
        </Button>
      }
    />
  );
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RegisterDialog);
