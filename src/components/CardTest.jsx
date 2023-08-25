
import { Add, AddCircle, CenterFocusStrong, KeyboardArrowRight, Remove } from '@mui/icons-material';
import { Card, Typography, Button } from "@mui/joy"
const CardTest = () => {
    return (
        <>
        <Card 
          variant="soft"
          size="md"
          color="primary"
        >
          <Typography
            level="title-md"
            component="span"
          >
           Total 
          </Typography>
          <Typography
            level="h2"
            component="h2"
          >
           $2,045 
          </Typography>
          <Button
          color="danger"
          startDecorator={<Add/>}
          ></Button>
          <Button
          color="success"
          startDecorator={<Remove/>}
          ></Button>


        </Card>

        </>
    )
}

export default CardTest