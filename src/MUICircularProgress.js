import React from "react";
import { Stack, Typography, CircularProgress } from "@mui/joy";
import { useCountUp } from "use-count-up";
import { CssVarsProvider } from "@mui/joy/styles";

// TO CHANGE BOX SHADOW EASIER:
// - inspect page
// - select svg for class="MuiCircularProgress-svg"
// - look in 'Styles' tab
// - locate .css-l3osn0-JoyCircularProgress-root
// - find 'box-shadow'
// - adjust values as desired

const MUICircularProgress = ({ color, percentage }) => {
  let { value: progressValue } = useCountUp({
    isCounting: true,
    duration: 2,
    start: 0,
    end: percentage,
  });

  if (progressValue > 100) {
    progressValue = 'NA';
  } else if (progressValue < 0) {
    progressValue = 0;
  }

  return (
    <Stack spacing={2}>
      <CssVarsProvider>
        <CircularProgress
          determinate
          value={progressValue}
          sx={{
            boxShadow:
              "inset 0 4px 5px 45px rgba(0, 0, 0, 0.5), 0 4px 5px 0px rgba(0, 0, 0, 0.5)",
            "--CircularProgress-size": "275px",
            "--CircularProgress-trackThickness": "45px",
            "--CircularProgress-progressThickness": "45px",
            "--CircularProgress-progressColor": color,
            "--CircularProgress-linecap": "flat",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>{progressValue}%</Typography>
        </CircularProgress>
      </CssVarsProvider>
    </Stack>
  );
};

export default MUICircularProgress;
