'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "next/image";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';


const drawerWidth = 240;
const navItems = ['Browse Menu', 'Carts', 'Contact Us'];

export default function Header(props: any) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}>
            <div style={{ paddingTop: '55px', textAlign: 'right',display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <span><ShoppingCartIcon /></span>
                <span style={{ paddingLeft: '10px', paddingRight: '16px' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ display: { sm: 'block', marginLeft: 'auto' } }}
                    >
                        <MenuIcon sx={{ color: 'black' }} />
                    </IconButton>
                </span>
            </div>
            <List sx={{ paddingTop: '105px' }}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                                     <Link href={`${item.replace(/\s+/g, '')}`}>
                        <ListItemButton sx={{ textAlign: 'left' }}>
                            <ListItemText primary={item} className='buttonList' />
                        </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="h6" sx={{ my: 2, paddingLeft: '20px' }} className='buttonList'>
                Login
            </Typography >
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (<>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position='fixed' sx={{ background: '#FFFFFF' }}>
                <Toolbar>
                    <Typography sx={{ marginRight: 'auto' }}>
                        <Link href='/'>
                            <Image src='/headerimage.png' alt='headerimage' width={90} height={90}>

                            </Image>
                        </Link>
                    </Typography>
                    <Typography sx={{ marginLeft: 'auto', display: { xs: 'flex', md: 'none', sm: 'flex', paddingRight: '16px' } }}>
                        <ShoppingCartIcon sx={{ color: '#000000' }} />
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon sx={{ zIndex: '9', position: 'relative', color: '#000000' }} />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', md: 'flex', sm: 'none', } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#000000' }} className='buttonList'>
                                <Link href={`${item.replace(/\s+/g, '')}`}>
                                    {item}
                                </Link>
                            </Button>
                        ))}
                        <Button variant="contained" sx={{ background: '#F77909 !important' }}>Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Typography sx={{ marginLeft: 'auto', display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                    <ShoppingCartIcon />
                </Typography>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    anchor={'right'}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'flex' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>

    </>
    );
}