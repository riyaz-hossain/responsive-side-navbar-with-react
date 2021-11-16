import React, { useState } from "react";
import './SideNav.css'
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
    ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom"
import { AccessAlarm } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import dropDownData from "./DropDownData";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        marginRight: "auto"
    },
    drawer: {
        width: 300
    },
    content: {
        padding: theme.spacing(3)
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
      }
}));

const SideNavbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div>
            <CssBaseline />
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List disablePadding className={classes.drawer}>

                {
                dropDownData.map((data, index) => data.main ? <div className="sidebar_responsive" id="sidebar">

                  <div className="sidebar__menu mb-4">
                    <div className="sidebar__link">
                      <li className="has-sub list-unstyled">
                        <a className="main-dropdown text-light nav-link collapsed text-left main-link" href={`#${data.id}`} role="button"
                          data-toggle="collapse">
                          <i className={data.mainIcon ? `fa ${data.mainIcon}` : 'fa fa-cube'}></i> {data.main}
                        </a>
                        <div className="collapse menu mega-dropdown" id={data.id}>
                          <div className="dropmenu" aria-labelledby="navbarDropdown">
                            <div className="container-fluid ">
                              <div className="row">
                                <div className="col-lg-12 px-2">
                                  <div className="submenu-box">
                                    <ul className="list-unstyled m-0">
                                      {
                                        data.dropDown1 ? <li>
                                          <Link style={{ marginTop: "-15px" }} to={data.link1} className={classes.link}>
                                            <ListItem button>
                                              <ListItemIcon style={{ color: "purple" }} >
                                                {
                                                  data.icon1 ? <data.icon1 /> : <DashboardIcon />
                                                }
                                              </ListItemIcon>
                                              <ListItemText style={{ color: "purple" }} primary={`${data.dropDown1}`} />
                                              
                                            </ListItem>
                                          </Link>
                                        </li> : null
                                      }
                                      {
                                        data.dropDown2 ? <li>
                                          <Link style={{ marginTop: "-25px" }} to={data.link2} className={classes.link}>
                                            <ListItem button>
                                              <ListItemIcon style={{ color: "purple" }} >
                                                {
                                                  data.icon2 ? <data.icon2 /> : <DashboardIcon />
                                                }
                                              </ListItemIcon>
                                              <ListItemText style={{ color: "purple" }} primary={`${data.dropDown2}`} />
                                              
                                            </ListItem>
                                          </Link>
                                        </li> : null
                                      }
                                      {
                                        data.dropDown3 ? <li>
                                          <Link style={{ marginTop: "-15px" }} to={data.link3} className={classes.link}>
                                            <ListItem button>
                                              <ListItemIcon style={{ color: "purple" }} >
                                                <DashboardIcon />
                                              </ListItemIcon>
                                              <ListItemText style={{ color: "purple" }} primary={`${data.dropDown3}`} />
                                            </ListItem>
                                          </Link>
                                        </li> : null
                                      }
                                      {
                                        data.dropDown4 ? <li>
                                          <Link style={{ marginTop: "-15px" }} to={data.link4} className={classes.link}>
                                            <ListItem button>
                                              <ListItemIcon style={{ color: "purple" }} >
                                                <DashboardIcon />
                                              </ListItemIcon>
                                              <ListItemText style={{ color: "purple" }} primary={`${data.dropDown4}`} />
                                            </ListItem>
                                          </Link>
                                        </li> : null
                                      }
                                      {
                                        data.dropDown5 ? <li>
                                          <Link style={{ marginTop: "-15px" }} to={data.link5} className={classes.link}>
                                            <ListItem button>
                                              <ListItemIcon style={{ color: "purple" }} >
                                                <DashboardIcon />
                                              </ListItemIcon>
                                              <ListItemText style={{ color: "purple" }} primary={`${data.dropDown5}`} />
                                            </ListItem>
                                          </Link>
                                        </li> : null
                                      }
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <hr />
                </div> : <div>
                  <Link to={data.link} className={classes.link}>
                    <ListItem button>
                      <ListItemIcon style={{ color: "#fff" }} >
                        <data.icon />
                      </ListItemIcon>
                      <ListItemText primary={data.mainMenu} />
                    </ListItem>
                  </Link>
                  <hr />
                </div>)
              }




                    <ul className="list-unstyled m-0">
                        <li>
                            <Link style={{ marginTop: "-15px" }} to={`/home`} className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon style={{ color: "purple" }} >
                                        <DashboardIcon />
                                    </ListItemIcon>
                                    <ListItemText style={{ color: "purple" }} />

                                </ListItem>
                            </Link>
                        </li>
                    </ul>

                    <div>
                        <Link to='{data.link}' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon style={{ color: "#fff" }} >
                                    <AccessAlarm />
                                </ListItemIcon>
                                <ListItemText primary="asdfsdf" />
                            </ListItem>
                        </Link>
                        <hr />
                    </div>


                    <Link to="/home">
                        <ListItem button>
                            <ListItemText primary="First Item" />
                        </ListItem>
                    </Link>
                    <Link to="/second-home">
                        <ListItem button>
                            <ListItemText primary="Second Item" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        toofaniCoder
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {/* <main className={classes.content}>
                <Typography variant="h2">New ReactJs Features!</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
                    ducimus magnam. Laudantium, pariatur alias numquam tempore error, ipsa
                    id quos sed porro sapiente tenetur inventore, consectetur eius. Magni
                    quasi, error ipsum nobis dicta totam amet ducimus ea omnis, illo nemo
                    reprehenderit dignissimos quod odit nisi deserunt perspiciatis
                    corporis adipisci ullam at fugit explicabo minima. Delectus voluptas,
                    corrupti hic reprehenderit magnam ipsa explicabo rem suscipit, rerum
                    impedit facere laboriosam minima? Delectus libero distinctio sapiente,
                    dolores consequatur molestiae. Earum reprehenderit sint ea quisquam
                    consequatur recusandae eos, cum itaque eaque unde quibusdam rem
                    quaerat officia quia dicta tenetur sapiente ut, magni voluptatum
                    atque!
                </Typography>
            </main> */}
        </div>
    );
};

export default SideNavbar;