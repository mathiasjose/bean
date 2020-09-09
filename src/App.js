import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Input, Container, Box, Button, Card} from '@material-ui/core'
import Spacer from 'react-spacer'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <header style={{backgroundColor: 'white', color: 'grey'}} className="App-header">
        <Box>
      <Grid container alignItems="center" justify="center">
        <Grid item md={6}>
        <Spacer height="25px"/>
          Meet...
          <br/>
          <Spacer height="25px"/>
          <Input placeholder="Email" />
          <Spacer height="25px"/>
        </Grid>
        <Grid item md={8}>
        <Spacer height="25px"/>
          For...
          <br/>
          <Carousel>
                <div>
                    <Card style={{backgroundMedia: 'https://lh3.googleusercontent.com/EtkogPzRQusQdiBFsgjywQxGr659EtvV0engldAf1L9emyVzriNvvgLLU9dCuWRIcHjtlhn-kn6HDgyJ9PtYT1fcvg992_jiaG4q7yWyFwvuVfVdTtq9AZOs1n9jQ9Hx4fTkKeMO76zLU-zLydj6Gu44Bue7zDLd6sxJzFYgO1ZlJwPobMV4t-saHNVoYJEEy2bKSPGoFqZ1Ul2N_0VSxfyTkp-Z-u_Is-uo5QR-pLJcCBeT4DDYchC9SNRRbNnxCm6XEfO-Gx1I8AGEV73SjZK1Ax57ZDOazVI_lPZHCXs1Hqe7c8m6iY8YtAnwLV2sTb4KmxRi3cJdK9rdPS1y7UkmLKJumPAV6laue87_N1XAbZNH9_9kynUgZiehvQ8UeETZ6z_3tVZ_TId7zqNxftFVlXlSNlBfqhgMwS9lGlKpMSygod1LXccvYlgXPXmjPch5S0W_e2eYm1jgurz-lsj5PfMdwjjhYPcWXwNd21lMuW2MCyAbL9UVbUHiV6smP7qkEKS9CqBmkos59sxswjVi8NTbe_ITL9X74ExE4cLKyEKeZc9kxso0Daz2D8CMDzDhAovAdoJWsiC_VnZIq368qGglJIUuDXSD9-N7q8N4crLwVl4Dw41CiTTwi1KxJC15_g3qjxWI9sLfAkEGV23SPZBrNOqxu32oC8jov4hUbbi1mOynvIEle8Op=s1008-no?authuser=0'}}>
                      <img style={{width: 250}} src='https://lh3.googleusercontent.com/EtkogPzRQusQdiBFsgjywQxGr659EtvV0engldAf1L9emyVzriNvvgLLU9dCuWRIcHjtlhn-kn6HDgyJ9PtYT1fcvg992_jiaG4q7yWyFwvuVfVdTtq9AZOs1n9jQ9Hx4fTkKeMO76zLU-zLydj6Gu44Bue7zDLd6sxJzFYgO1ZlJwPobMV4t-saHNVoYJEEy2bKSPGoFqZ1Ul2N_0VSxfyTkp-Z-u_Is-uo5QR-pLJcCBeT4DDYchC9SNRRbNnxCm6XEfO-Gx1I8AGEV73SjZK1Ax57ZDOazVI_lPZHCXs1Hqe7c8m6iY8YtAnwLV2sTb4KmxRi3cJdK9rdPS1y7UkmLKJumPAV6laue87_N1XAbZNH9_9kynUgZiehvQ8UeETZ6z_3tVZ_TId7zqNxftFVlXlSNlBfqhgMwS9lGlKpMSygod1LXccvYlgXPXmjPch5S0W_e2eYm1jgurz-lsj5PfMdwjjhYPcWXwNd21lMuW2MCyAbL9UVbUHiV6smP7qkEKS9CqBmkos59sxswjVi8NTbe_ITL9X74ExE4cLKyEKeZc9kxso0Daz2D8CMDzDhAovAdoJWsiC_VnZIq368qGglJIUuDXSD9-N7q8N4crLwVl4Dw41CiTTwi1KxJC15_g3qjxWI9sLfAkEGV23SPZBrNOqxu32oC8jov4hUbbi1mOynvIEle8Op=s1008-no?authuser=0'/>
"
                    </Card>
                </div>
                <div>
                <Card style={{backgroundMedia: 'https://lh3.googleusercontent.com/EtkogPzRQusQdiBFsgjywQxGr659EtvV0engldAf1L9emyVzriNvvgLLU9dCuWRIcHjtlhn-kn6HDgyJ9PtYT1fcvg992_jiaG4q7yWyFwvuVfVdTtq9AZOs1n9jQ9Hx4fTkKeMO76zLU-zLydj6Gu44Bue7zDLd6sxJzFYgO1ZlJwPobMV4t-saHNVoYJEEy2bKSPGoFqZ1Ul2N_0VSxfyTkp-Z-u_Is-uo5QR-pLJcCBeT4DDYchC9SNRRbNnxCm6XEfO-Gx1I8AGEV73SjZK1Ax57ZDOazVI_lPZHCXs1Hqe7c8m6iY8YtAnwLV2sTb4KmxRi3cJdK9rdPS1y7UkmLKJumPAV6laue87_N1XAbZNH9_9kynUgZiehvQ8UeETZ6z_3tVZ_TId7zqNxftFVlXlSNlBfqhgMwS9lGlKpMSygod1LXccvYlgXPXmjPch5S0W_e2eYm1jgurz-lsj5PfMdwjjhYPcWXwNd21lMuW2MCyAbL9UVbUHiV6smP7qkEKS9CqBmkos59sxswjVi8NTbe_ITL9X74ExE4cLKyEKeZc9kxso0Daz2D8CMDzDhAovAdoJWsiC_VnZIq368qGglJIUuDXSD9-N7q8N4crLwVl4Dw41CiTTwi1KxJC15_g3qjxWI9sLfAkEGV23SPZBrNOqxu32oC8jov4hUbbi1mOynvIEle8Op=s1008-no?authuser=0'}}>
                      <img style={{width: 250}} src='https://media.istockphoto.com/photos/red-wine-glass-stain-picture-id173701851?k=6&m=173701851&s=170667a&w=0&h=g_-EbtrO--q_Bgp5BtXZZAPxZLm3htoA64rS1ImZAK8='/>
                    </Card>
                </div>
                <div>
                <Card style={{backgroundMedia: 'https://lh3.googleusercontent.com/EtkogPzRQusQdiBFsgjywQxGr659EtvV0engldAf1L9emyVzriNvvgLLU9dCuWRIcHjtlhn-kn6HDgyJ9PtYT1fcvg992_jiaG4q7yWyFwvuVfVdTtq9AZOs1n9jQ9Hx4fTkKeMO76zLU-zLydj6Gu44Bue7zDLd6sxJzFYgO1ZlJwPobMV4t-saHNVoYJEEy2bKSPGoFqZ1Ul2N_0VSxfyTkp-Z-u_Is-uo5QR-pLJcCBeT4DDYchC9SNRRbNnxCm6XEfO-Gx1I8AGEV73SjZK1Ax57ZDOazVI_lPZHCXs1Hqe7c8m6iY8YtAnwLV2sTb4KmxRi3cJdK9rdPS1y7UkmLKJumPAV6laue87_N1XAbZNH9_9kynUgZiehvQ8UeETZ6z_3tVZ_TId7zqNxftFVlXlSNlBfqhgMwS9lGlKpMSygod1LXccvYlgXPXmjPch5S0W_e2eYm1jgurz-lsj5PfMdwjjhYPcWXwNd21lMuW2MCyAbL9UVbUHiV6smP7qkEKS9CqBmkos59sxswjVi8NTbe_ITL9X74ExE4cLKyEKeZc9kxso0Daz2D8CMDzDhAovAdoJWsiC_VnZIq368qGglJIUuDXSD9-N7q8N4crLwVl4Dw41CiTTwi1KxJC15_g3qjxWI9sLfAkEGV23SPZBrNOqxu32oC8jov4hUbbi1mOynvIEle8Op=s1008-no?authuser=0'}}>
                <img style={{width: 250}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKiU1vqyHoKM7F7-tnDTby-6l1dcfxtIxzIw&usqp=CAU'/>
                    </Card>
                </div>
            </Carousel>
        </Grid>
        <Grid item md={8}>
        <Spacer height="25px"/>
          When?
          <br/>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6}>
        <Spacer height="25px"/>
          Where?
          <br/>
          <Input placeholder="first" style={{width: '100%'}}/>
        </Grid>
        <Grid item md={8}>
        <Spacer height="25px"/>
          My name is...
          <br/>
          <Input placeholder="First name"/>
          <Input placeholder="Last name"/>
          <Spacer height="25px"/>
          <Button variant="outlined" color="primary">Send invitation</Button>
        </Grid>
      </Grid>
      </Box>
      </header>
    </div>
  );
}

export default App;
