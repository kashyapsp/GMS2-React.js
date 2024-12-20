import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <Box sx={{ minWidth: 275 , ml: 3}}>
      <Card variant="outlined">
      <CardContent sx={{ minwidth: 100 }}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        LATEST NEWS
      </Typography>
     
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>DETAILS</Typography>
      <Typography variant="body2">
       Abc
       
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
        </Card>
    </Box>
        </Grid>
        <Grid item xs={4}>
        <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <CardContent sx={{minHeight: 138}}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        
      </Typography>
     
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
      <Typography variant="body2">
        
        <br />
       
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"></Button>
    </CardActions>
        </Card>
    </Box>
        </Grid>
        <Grid item xs={4}>
        <Box sx={{ minWidth: 275 ,  mr: 3}}>
      <Card variant="outlined">
      <CardContent sx={{ minHeight: 138 }}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      
      </Typography>
     
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
      <Typography variant="body2">
        
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"></Button>
    </CardActions>
        </Card>
    </Box>
        </Grid>
        <Grid item xs={8}>
        <Box sx={{ minWidth: 275 , ml: 3}}>
      <Card variant="outlined">
      <CardContent sx={{minHeight: 330}}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        
      </Typography>
     
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
      <Typography variant="body2">
        
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
        </Card>
    </Box>
        </Grid>
        <Grid item xs={4}>
        <Box sx={{ minWidth: 275 , mr: 3}}>
      <Card variant="outlined">
      <CardContent sx={{minHeight: 144}}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        
      </Typography>
     
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
      <Typography variant="body2">
       
        <br />
       
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"></Button>
    </CardActions>
        </Card>
    </Box>



    <Box sx={{ minWidth: 275, mt: 2, mr: 3 }}>
      <Card variant="outlined">
      <CardContent sx={{minHeight: 144}}>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        
      </Typography>
     
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}></Typography>
      <Typography variant="body2">
        
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
        </Card>
    </Box>
        </Grid>
      </Grid>
      
      </header>
    </div>
  );
}

export default App;

