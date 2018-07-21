import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import { mailFolderListItems, otherMailFolderListItems } from './DataFile';
const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };

class Navbar extends Component{
state={
  left: false,
  open:false,

}
toggleDrawer = (side, open) => () => {
  this.setState({
    [side]: open,
  });
};
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

   render(){
    const { fullScreen } = this.props;
    const sideList = (
      <div styles={styles.list}>
   <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div style={styles.fullList}>
       
        <Divider />
       
      </div>
       );
  return (
    <div style={styles.root}>
    <AppBar position="static">
    <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Sign In"}</DialogTitle>
         
          <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              
            />
            <br/><br/>
             <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              
            />
          
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
            Sign In
            </Button>
            <br/>
            <Button onClick={this.handleClose} color="primary">
            Sign Up
            </Button>
            <br/>
            <Button onClick={this.handleClose} color="primary">
              Forgot Password
            </Button>
            <br/>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Toolbar>
          <IconButton style={styles.menuButton} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={styles.flex}>
            GrowAI
          </Typography>
          <Button onClick={this.handleClickOpen} color="inherit">Login</Button>
          <Button onClick={this.handleClickOpen} color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );

}
}
Navbar.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};
export default withMobileDialog()(Navbar);