'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AppBar, Box, Toolbar, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

const pages = ['Home', 'Services', 'Contact Us', 'Calculations'];

export default function ResponsiveAppBar() {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ padding: "1px 100px", backgroundColor: 'white', boxShadow: 'none', height: 80 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image src="/logo.svg" alt="Logo" width={90} height={70} priority />
                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 2 }}>
                        <IconButton onClick={handleOpenMenu} sx={{ color: 'black' }}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseMenu} sx={{ my: 1 }}>{page}</MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        {pages.map(page => (
                            <Button key={page} sx={{ fontSize: "15px", my: 2, color: 'black', mx: 2, textTransform: 'none' }}>{page}</Button>
                        ))}
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Button variant="contained" sx={{ backgroundColor: '#88AA00', borderRadius: 20, px: 3, py: 1, color: 'white', textTransform: 'none' }}>
                                Request a Quote
                            </Button>
                            <Button sx={{ width: 40, height: 40, minWidth: 40, backgroundColor: '#002B5B', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s', '&:hover': { backgroundColor: '#001F3F', '& svg': { transform: 'rotate(45deg)' } } }}>
                                <NorthEastOutlinedIcon sx={{ transition: 'transform 0.2s' }} />
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}