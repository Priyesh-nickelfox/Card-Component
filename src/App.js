import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import data from './Data/data';

function App() {                  
  return (
    <div className="App"> 

        <Container maxWidth='sm' sx={{backgroundImage:`linear-gradient(180deg, #0F1011 0%, rgba(15, 16, 17, 0.92) 8.96%, #0F1011 38.25%, #0F1011 90.85%, #0F1011 100%)`,height: '1040px', width: '430px', paddingTop: "48px"}}>
        <Box sx={{
            height: '96px', width: '390px', marginBottom: '20px'
            }}>
            <Typography variant='h4' sx={{color: '#808080', marginBottom: '5px'}}>Why Choose</Typography>
            <Typography variant='h5' sx={{color: 'white', fontWeight: '700'}}>Techie.ai</Typography>
        </Box> 

        <Box sx={{width: '390px', height: '892px'}}>
          <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>

           
            {data.map((object)=>(
                 <Grid item xs={12} key={object.id} color='white'>
                   <Paper elevation={10} sx={{height: '200px', width: '380px', borderRadius: '16px', padding: '20px', backgroundColor: '#212224'}}>
                       <img src={object.image} alt="Image" style={{height: '35px', width: '40px'}}/>
                       <Typography variant='body1' sx={{fontWeight: '800', marginTop: '10px', marginBottom: '5px', color: '#F4F4F7'}}>{object.heading}</Typography>
                       <Typography variant='body2' sx={{color: '#83838F'}}>{object.body}</Typography>
                   </Paper>
                 </Grid>
            ))}
          </Grid>
        </Box>
        </Container>
    </div>
  );
}

export default App;

