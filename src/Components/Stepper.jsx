import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';

const inputs = [
  { label: 'nickname', type: 'text', title: 'Your Nickname' },
  { label: 'email', type: 'email', title: 'Your Email Adress' },
  { label: 'password', type: 'password', title: 'Your Password' },
];
export default function HorizontalLinearStepper({ addText }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [nickname, setNick] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNext = (user, type) => {
    if (
      (type === 'text' && nickname !== '') ||
      (type === 'email' && email !== '') ||
      (type === 'password' && password !== '')
    ) {
      if (activeStep === inputs.length - 1) {
        addText(user);
        setNick('');
        setEmail('');
        setPassword('');
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      alert('Fill all inputs!');
    }
  };
  const inputValueHandler = (type, e) => {
    if (type === 'text') {
      setNick(e.target.value);
    }
    if (type === 'email') {
      setEmail(e.target.value);
    }
    if (type === 'password') {
      setPassword(e.target.value);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '700px', margin: '15px auto' }}>
      <Stepper activeStep={activeStep}>
        {inputs.map((input, index) => {
          const stepProps = {};
          const labelProps = {};
          if (true) {
            labelProps.optional = (
              <Typography variant="caption">Required*</Typography>
            );
          }

          return (
            <Step key={input.title} {...stepProps}>
              <StepLabel {...labelProps}>{input.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === inputs.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box className="input-container">
            <TextField
              required
              id="standard-required"
              label={`Your ${inputs[activeStep].label}`}
              variant="standard"
              value={
                inputs[activeStep].type === 'text'
                  ? nickname
                  : inputs[activeStep].type === 'email'
                  ? email
                  : password
              }
              type={inputs[activeStep].type}
              onChange={(e) => {
                inputValueHandler(inputs[activeStep].type, e);
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === inputs.length - 1 ? (
              <NavLink
                className="finish-button"
                onClick={() => {
                  handleNext(
                    {
                      nickname: nickname,
                      email: email,
                      password: password,
                    },
                    inputs[activeStep].type
                  );
                }}
                to={password !== '' ? '/books' : '/'}
              >
                Finish
              </NavLink>
            ) : (
              <Button
                onClick={() => {
                  handleNext(
                    {
                      nickname: nickname,
                      email: email,
                      password: password,
                    },
                    inputs[activeStep].type
                  );
                }}
              >
                Next
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
