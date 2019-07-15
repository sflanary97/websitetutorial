import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';



function App() {
  return (
    <div className="App">
      <Container>
        <AppBar position='relative'>
          <ToolBar>
            <Typography>
              Website Tutorial
            </Typography>
          </ToolBar>
        </AppBar>
        <Card>
          <Typography>
            Heres some info about my site!
          </Typography>
        </Card>
      </Container>
    </div>
  );
}

export default App;
