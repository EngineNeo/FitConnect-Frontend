import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import {
  FormHelperText,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box
} from "@mui/material";
import VisibilityPasswordTextField from '../../shared/components/VisibilityPasswordTextField';
import withStyles from "@mui/styles/withStyles";
import FormDialog from "../../shared/components/FormDialog";
// import ButtonCircularProgress from "../../shared/components/ButtonCircularProgress";
// import classNames from "classnames";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import PersonIcon from '@mui/icons-material/Person';
import SportsIcon from '@mui/icons-material/Sports';

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
  const [birthDate, setBirthDate] = useState('')
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const { setStatus, theme, onClose, openTermsDialog, status, classes } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [hasTermsOfServiceError, setHasTermsOfServiceError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerTermsCheckbox = useRef();
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  // const [userType, setUserType] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('');
  const [coachGoal, setCoachGoal] = useState('');
  const [coachBio, setCoachBio] = useState('');
  const [coachExperience, setCoachExperience] = useState('');
  const [coachCost, setCoachCost] = useState('');

  const handleUserTypeSelect = (type) => {
    setSelectedUserType(type);
  };

  const userTypeButtonStyle = (type) => ({
    border: `1px solid ${selectedUserType === type ? 'primary' : 'default'}`,
    backgroundColor: selectedUserType === type ? 'lightgrey' : 'white',
    padding: '10px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '120px',
  });

  const showSuccessMessage = () => {
    setIsRegistrationSuccessful(true);

    setTimeout(() => setIsRegistrationSuccessful(false), 5000);
  };

  const handleNextOrSubmit = () => {
    if (registerTermsCheckbox.current && !registerTermsCheckbox.current.checked) {
      setHasTermsOfServiceError(true);
      return;
    }

    if (currentStep === 2 && selectedUserType === 'user') {
      register();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => setCurrentStep(currentStep - 1);

  const renderRegistrationForm = () => (
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
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          {/* <MenuItem value="other">Other</MenuItem> Other not currently available on database */}
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date of Birth"
          onChange={(newDate) => setBirthDate(format(newDate, 'yyyy-MM-dd'))}
          outputFormat="yyyy-MM-dd"
          slotProps={{ textField: { fullWidth: true } }}
        />
      </LocalizationProvider>
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
      {isRegistrationSuccessful && (
        <Typography color="primary" align="center">
          Registration Successful!
        </Typography>
      )}
    </Fragment>
  );

  const renderUserTypeStep = () => (
    <Fragment>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button 
          onClick={() => handleUserTypeSelect('user')} 
          style={userTypeButtonStyle('user')}
        >
          <PersonIcon fontSize="large" />
          <Box mt={1}>User</Box>
        </Button>
        <Button 
          onClick={() => handleUserTypeSelect('coach')} 
          style={userTypeButtonStyle('coach')}
        >
          <SportsIcon fontSize="large" />
          <Box mt={1}>Coach</Box>
        </Button>
      </Box>
    </Fragment>
  );

  const handleExperienceSelect = (level) => {
    setCoachExperience(level);
  };

  const experienceButtonStyle = (level) => ({
    border: `1px solid ${coachExperience === level ? 'primary' : 'default'}`,
    backgroundColor: coachExperience === level ? 'lightgrey' : 'white',
    margin: '5px',
    padding: '10px',
  });

  const renderCoachSurveyStep = () => (
    <Fragment>
      <FormControl fullWidth margin="normal">
        <InputLabel id="coach-goal-label">Goal</InputLabel>
        <Select
          labelId="coach-goal-label"
          value={coachGoal}
          onChange={(e) => setCoachGoal(e.target.value)}
          label="Goal"
        >
          <MenuItem value={1}>Lose Weight</MenuItem>
          <MenuItem value={2}>Gain Muscle</MenuItem>
          <MenuItem value={3}>Flexibility</MenuItem>
          <MenuItem value={4}>Increase Stamina</MenuItem>
          <MenuItem value={5}>Reduce Stress</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Bio"
        multiline
        fullWidth
        margin="normal"
        rows={4}
        variant="outlined"
        value={coachBio}
        onChange={(e) => setCoachBio(e.target.value)}
      />
      <Box display="flex" justifyContent="center" alignItems="center" margin="normal">
        <Button style={experienceButtonStyle('novice')} onClick={() => handleExperienceSelect('novice')}>
          Novice
        </Button>
        <Button style={experienceButtonStyle('intermediate')} onClick={() => handleExperienceSelect('intermediate')}>
          Intermediate
        </Button>
        <Button style={experienceButtonStyle('expert')} onClick={() => handleExperienceSelect('expert')}>
          Expert
        </Button>
      </Box>
      <TextField
        label="Cost"
        type="number"
        fullWidth
        margin="normal"
        variant="outlined"
        value={coachCost}
        onChange={(e) => setCoachCost(e.target.value)}
      />
    </Fragment>
  );


  // Function to get the content of the current step
  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return renderRegistrationForm();
      case 2:
        return renderUserTypeStep();
      case 3:
        return renderCoachSurveyStep();
      default:
        return 'Default Step';
    }
  };

  const register = useCallback(() => {
    if (registerTermsCheckbox.current && !registerTermsCheckbox.current.checked) {
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
      password: password,
    };

    if (gender) {
      userData.gender = gender;
    }

    if (birthDate) {
      userData.birth_date = birthDate
    }

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
        console.log(data)
        if (data.user_id) {
          showSuccessMessage();
          onClose();
        } else {
          setStatus(data.error);
          console.log(userData.birth_date)
        }
      })
      .catch(error => {
        setIsLoading(false);
        setStatus('serverError');
      });
  }, [
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
      onClose={props.onClose}
      open
      headline="Register"
      onFormSubmit={(e) => {
        e.preventDefault();
        register();
      }}
      hideBackdrop
      hasCloseIcon
      content={getStepContent(currentStep)}
      actions={
        <Fragment>
          <Box display="flex" justifyContent="space-between">
            {currentStep > 1 && (
              <Button onClick={handleBack} variant="contained">
                Back
              </Button>
            )}
            {(currentStep === 1 || (currentStep === 2 && selectedUserType)) && (
              <Button onClick={handleNextOrSubmit} color="primary" variant="contained">
                {currentStep === 2 && selectedUserType === 'user' ? 'Submit' : 'Next'}
              </Button>
            )}
            {currentStep === 3 && (
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            )}
          </Box>
        </Fragment>
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
