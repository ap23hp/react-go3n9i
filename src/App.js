import React from 'react';
import './style.css';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Route,Routes,BrowserRouter,Link,useNavigate} from 'react-router-dom'




 function App() {
 //wconst navigate=useNavigate()
 
  
  return (


    
    
    <div style={{ padding: '2px', margin: '1px' }}>
{/* <BrowserRouter>
<Link to="/adminlogin">
AdminLogin
  </Link>

  <Link to="/studentlogin">
StudentLogin
  </Link>

  <Link to="/login">
Login
  </Link>
  <Link to="/contactus">
ContactUs
  </Link>

<Routes>

<Route path="/adminlogin" element={<AdminLogin/>}>
</Route>

<Route path="/studentlogin" element={<StudentLogin/>}>
</Route>

<Route path="/login" element={<Login/>}>
</Route>

<Route path="/contactus" element={<ContactUs/>}>
</Route>

</Routes>
</BrowserRouter> */}


      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Guvi
            </Typography>
            <BrowserRouter>
        
        <Button  color="inherit"><Link to="/login">
Login
</Link></Button>
<Routes>

<Route path="/login" element={<Login/>}>
</Route>
</Routes>
        </BrowserRouter>

         
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            XYZ Organization,
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            India
          </Typography>
          <Typography variant="body2">
            Learning is the key to success
          </Typography>
        </CardContent>
        <CardActions>
        <BrowserRouter>
        
        <Button  size="small"><Link to="/contactus">
Contact Us
</Link></Button>
<Routes>

<Route path="/contactus" element={<ContactUs/>}>
</Route>
</Routes>
        </BrowserRouter>

    
        </CardActions>
      </Card>
      <br />
      <Grid container spacing={2}>
        <Grid item>
        <BrowserRouter>
        
        
          <Button   variant="contained"><Link to="/adminlogin">
Admin Login
  </Link></Button>
  <Routes>

<Route path="/adminlogin" element={<AdminLogin/>}>
</Route>
</Routes>
          </BrowserRouter>

        </Grid>
        <Grid item>

        <BrowserRouter>
        
        <Button   variant="contained"><Link to="/studentlogin">
Student Login
</Link></Button>
<Routes>

<Route path="/studentlogin" element={<StudentLogin/>}>
</Route>
</Routes>
        </BrowserRouter>

        </Grid>
      </Grid>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular JS</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

function AdminLogin(){
  const navigate=useNavigate()
  return(
<>
<h3>Admin Login Component</h3>

</>

  )
}


function StudentLogin(){
  const navigate=useNavigate()
  return(
<>
<h3>Student Login Component</h3>
</>

  )
}


function Login(){
  const navigate=useNavigate()
  return(
<>
<h3>Login Component</h3>
</>

  )
}



function ContactUs(){
  const navigate=useNavigate()
  return(
<>
<h3>ContactUs Component</h3>
</>

  )
}

export default App