import { Box, Grid, Paper, Typography } from "@mui/material";


const ProductDescription = () => {


  return (<>
    <Box sx={{ paddingTop: '104px', display: 'flex', flexDirection: 'row' }} className='Productcss1'>
      <div className="productdesc">
        <div >
          <Typography sx={{ fontFamily: 'Ubuntu,sans-serif', color: '#f77909', fontSize: '18px' }}>
            Briyani Shop
          </Typography>
          <div style={{ fontFamily: 'Grand Hotel,cursive', color: '#444', fontSize: '55px', letterSpacing: '1px' }}>
            we are behind the delicious food.
          </div>
        </div>

        <div style={{ paddingTop: '64px' }}>
          Many years ago, a young couple with two younger kids arrived in New Zealand to make a brighter future for their younglings. They had no huge fortune but talent to make delicious food. With hardwork and their sheer determination, built a thriving local business offering delicious srilankan & Indian takeaways for locals in the Hutt valley - and as they say ‘Rest is History’
        </div>
      </div>

      <div className="gridItems">
        <Grid container item xs={4} spacing={2} paddingLeft={'20px'}>
          <Grid item xs={12}>
            <Paper style={{ background: '#f2f2f2', boxShadow: 'none' }}>
              <p className='icons1'>
                <i className="far fa-lightbulb"></i>
              </p>
              <Typography sx={{ paddingTop: '16px', paddingBottom: '16px', fontSize: '16px' }}>We keep our lights on just for you. </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <Grid item xs={12}>
            <Paper style={{ background: '#f2f2f2', boxShadow: 'none' }}>
              <p className='icons1'>
                <i className="fas fa-motorcycle "></i>
              </p>
              <Typography sx={{ paddingTop: '16px', paddingBottom: '16px', fontSize: '16px' }}>We are just a short ride away. </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ background: '#f2f2f2', boxShadow: 'none' }}>
            <div>
              <p className='icons1'>
                <i className="far fa-heart "></i>
              </p></div>
            <div>
              <Typography sx={{ paddingTop: '16px', paddingBottom: '16px', fontSize: '16px' }}>We love our valued customers.</Typography>
            </div>  </Paper>
        </Grid>
        </div>
    </Box>

  </>)
}

export default ProductDescription;