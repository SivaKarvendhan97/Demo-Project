import { Box, Grid, Paper, Typography } from "@mui/material";


const ProductOverview = () => {


    return (<>
        <Box sx={{paddingTop: '104px',display: 'flex',flexDirection:'row'}} className='Productcss'>
           <div >
            <Typography sx={{fontFamily:'Ubuntu,sans-serif',color:'#f77909',fontSize:'18px'}}>
                Briyani Shop
                
            </Typography>
            <div style={{fontFamily:'Grand Hotel,cursive',color:'#444',fontSize:'55px',letterSpacing:'1px'}}>
            Delicious food is our promise.
            </div>
            </div>
            
            <div className="gridItems">
        <Grid container item xs={4} spacing={2} paddingLeft={'20px'}>
          <Grid item xs={12}>
          <Paper style={{ background: '#f2f2f2' ,boxShadow: 'none'}}>
          <p className='icons'>
          <i className="fa-solid fa-hand-peace"></i>
          </p>
                <Typography sx={{paddingTop:'16px',paddingBottom:'16px',fontSize:'16px'}}>5 Star </Typography>
              <Typography  sx={{fontSize:'17px',fontWeight:'600'}}>Food Quality</Typography>
              </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <Grid item xs={12}>
          <Paper style={{ background: '#f2f2f2' ,boxShadow: 'none'}}>
          <p className='icons'>
          <i className="fa-solid fa-pizza-slice"></i>
          </p>
              <Typography sx={{paddingTop:'16px',paddingBottom:'16px',fontSize:'16px'}}>1000 + </Typography>
              <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Satisfied Customers</Typography>
            </Paper>
          </Grid> 
        </Grid>
        <Grid item xs={4}>
            <Paper style={{ background: '#f2f2f2' ,boxShadow: 'none'}}>
            <p className='icons'>
            <i className="fas fa-mug-hot"></i>
          </p>
            <Typography sx={{paddingTop:'16px',paddingBottom:'16px',fontSize:'16px'}}>100 + </Typography>
              <Typography sx={{fontSize:'17px',fontWeight:'600'}}>Daily Customers</Typography>
            </Paper>
        </Grid>
      </div>
        </Box>
        
    </>)
}

export default ProductOverview;