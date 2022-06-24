import NextLink from "next/link"

import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import MenuOutlined from "@mui/icons-material/MenuOutlined";



const Navbar = () => {
  return (
    <AppBar position='sticky' elevation = {0} >
      <Toolbar>
        
        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlined/>
        </IconButton>

        <NextLink href='/' passHref >
          <Link>
            <Typography variant='h6' color="white"  >Cookie Master</Typography>
          </Link>
        </NextLink>

        <div style = {{ flex: 1 }}  />

        <NextLink href='/theme-changer' passHref >
          <Link>
            <Typography variant='h6' color="white"  >Change Theme</Typography>
          </Link>
        </NextLink>





      </Toolbar>
    </AppBar>
  )
}

export default Navbar