'use client'
import { AppBar, Box, Paper, Toolbar, Typography } from "@mui/material";
import Image from "next/image";


const FooterComponent = () => {
  return (<>
    <Paper sx={{
      marginTop: 'calc(10% + 60px)',
      width: '100%',
      bottom: 0,
      background: '#f77909',
      paddingTop: '80px',
      paddingBottom: '80px'
    }} component="footer" square variant="outlined">
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          my: 1
        }}
      >
        <div>
          <p className="icons2">
            <i className="fab fa-facebook-f " style={{ paddingRight: '20px' }}></i>
            <i className="fas fa-map-marker-alt "></i>
          </p>
        </div>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          mb: 2,
        }}
      >
        <Typography variant="caption" color="#eee">
          ©2023 Biryani Shop
        </Typography>
      </Box>
    </Paper>
  </>
  )
}
export default FooterComponent;