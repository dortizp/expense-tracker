import { Button } from "@mui/joy"
import Typography from '@mui/joy/Typography';
import Slider from '@mui/joy/Slider'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Switch from '@mui/joy/Switch';
import { useState } from "react";

import { Add, AddCircle, CenterFocusStrong, KeyboardArrowRight, Remove } from '@mui/icons-material';

const ButtonTest = () => {
  const [alarmStatus, setAlarmStatus] = useState(false)
    return (
        <>
        <Button
          variant="outlined"
          sx={{
            borderRadius : 4
          }}
          startDecorator={<AddCircle/>}
        >
          Add
          </Button>

        <Slider
        defaultValue={10}
        max={100}
        />

        <Select placeholder="Categories">
          <Option>Groceries</Option>
          <Option>Food</Option>
          <Option>Medicine</Option>
          <Option>Clothes</Option>
        </Select>

        <Typography
          level="h3"
          component="h3"
          endDecorator={
          <Switch
            checked={alarmStatus}
            onChange={() => setAlarmStatus(!alarmStatus)}
            color="primary"
            sx={{
              padding:0.5
            }}
          />
          }
          >
            Alarm
        </Typography>


        </>
    )
}

export default ButtonTest