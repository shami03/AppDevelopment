import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SubjectIcon from '@mui/icons-material/Subject';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import BadgeIcon from '@mui/icons-material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarState } from '../redux/sidebarSlice';
import CloseIcon from '@mui/icons-material/Close';
import { logout } from '../redux/userSlice';
import { getEmail, getRole } from './LocalStorage';

function SideBar() {
  const username = getEmail();
  const userType = getRole();

  const nav = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const handleMenuItemClick = (menuItemId, route) => {
    setActiveMenuItem(menuItemId);
    nav(route);
  };

  const dispatch = useDispatch();
  const handleLogout = () => {
    if (window.confirm("Are You sure to logout?")) {
      localStorage.clear();
   
      nav("/");
    }
  };

  const isSidebarOpen = useSelector(selectSidebarState);

  return (
    <>
      {username ? (
        <>
          <div className={`sidebar-container ${isSidebarOpen ? 'open' : 'menu2'}`}>
            <Sidebar>
              {isSidebarOpen ? (
                <Menu className="menu">
                  <>
                    {userType === "ADMIN" ? (
                      <>
                        <MenuItem
                          style={{
                            backgroundColor: activeMenuItem === 'Dashboard' ? 'rgb(51, 51, 241)' : 'transparent',
                            borderRadius: 50
                          }}
                          component={<Link to="/admin-dashboard" />}
                          icon={<SpaceDashboardIcon />}
                          onClick={() => handleMenuItemClick('Dashboard', '/admin-dashboard')}
                        >
                          Dashboard
                        </MenuItem>
                        <MenuItem
                          style={{
                            backgroundColor: activeMenuItem === 'Games' ? 'rgb(51, 51, 241)' : 'transparent',
                            borderRadius: 50
                          }}
                          component={<Link to="/games" />}
                          icon={<LibraryBooksIcon />}
                          onClick={() => handleMenuItemClick('Games', '/games')}
                        >
                          Games
                        </MenuItem>
                        <MenuItem
                          style={{
                            backgroundColor: activeMenuItem === 'Players' ? 'rgb(51, 51, 241)' : 'transparent',
                            borderRadius: 50
                          }}
                          component={<Link to="/players" />}
                          icon={<PeopleOutlineIcon />}
                          onClick={() => handleMenuItemClick('Players', '/players')}
                        >
                          Players
                        </MenuItem>
                       
                        <MenuItem
                          style={{
                            backgroundColor: activeMenuItem === 'Subjects' ? 'rgb(51, 51, 241)' : 'transparent',
                            borderRadius: 50
                          }}
                          component={<Link to="/highscores" />}
                          icon={<SubjectIcon />}
                          onClick={() => handleMenuItemClick('Subjects', '/admin-fee')}
                        >
                          Highscores
                        </MenuItem>
                        <MenuItem
                          style={{
                            backgroundColor: activeMenuItem === 'Reports' ? 'rgb(51, 51, 241)' : 'transparent',
                            borderRadius: 50
                          }}
                          component={<Link to="/explore" />}
                          icon={<ImportContactsIcon />}
                          onClick={() => handleMenuItemClick('Reports', '/reports')}
                        >
                          QuickPlay
                        </MenuItem>
                        <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
                        
                      </>
                    ) : (
                      <>
                        {userType === "PLAYER" ? (
                          <>
                            <MenuItem
                              style={{
                                backgroundColor: activeMenuItem === 'Dashboard' ? 'rgb(51, 51, 241)' : 'transparent',
                                borderRadius: 50
                              }}
                              component={<Link to="/user-dashboard" />}
                              icon={<SpaceDashboardIcon />}
                              onClick={() => handleMenuItemClick('Dashboard', '/user-dashboard')}
                            >
                              Dashboard
                            </MenuItem>
                            <MenuItem
                              style={{
                                backgroundColor: activeMenuItem === 'Games' ? 'rgb(51, 51, 241)' : 'transparent',
                                borderRadius: 50
                              }}
                              component={<Link to="/gamepage" />}
                              icon={<LibraryBooksIcon />}
                              onClick={() => handleMenuItemClick('Games', '/gamepage')}
                            >
                              Games
                            </MenuItem>
                            
                            
                            
                            <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
                            <footer>&copy; Copyright 2023 123.abc</footer>
                          </>
                        ) : (
                          <>
                            <MenuItem
                              style={{
                                backgroundColor: activeMenuItem === 'Dashboard' ? 'rgb(51, 51, 241)' : 'transparent',
                                borderRadius: 50
                              }}
                              component={<Link to="/ins-dashboard" />}
                              icon={<SpaceDashboardIcon />}
                              onClick={() => handleMenuItemClick('Dashboard', '/ins-dashboard')}
                            >
                              Dashboard
                            </MenuItem>
                            <MenuItem
                              style={{
                                backgroundColor: activeMenuItem === 'Games' ? 'rgb(51, 51, 241)' : 'transparent',
                                borderRadius: 50
                              }}
                              component={<Link to="/games" />}
                              icon={<LibraryBooksIcon />}
                              onClick={() => handleMenuItemClick('Games', '/games')}
                            >
                              Games
                            </MenuItem>
                            <MenuItem
                              style={{
                                backgroundColor: activeMenuItem === 'Players' ? 'rgb(51, 51, 241)' : 'transparent',
                                borderRadius: 50
                              }}
                              component={<Link to="/players" />}
                              icon={<BadgeIcon />}
                              onClick={() => handleMenuItemClick('Players', '/players')}
                            >
                              Players
                            </MenuItem>
                            <MenuItem
                              style={{
                                backgroundColor: activeMenuItem === 'activities' ? 'rgb(51, 51, 241)' : 'transparent',
                                borderRadius: 50
                              }}
                              component={<Link to="/grading" />}
                              icon={<PeopleOutlineIcon />}
                              onClick={() => handleMenuItemClick('activities', '/activities')}
                            >
                              Grading
                            </MenuItem>
                            <MenuItem
                              style={{
                                backgroundColor: activeMenuItem === 'attendance' ? 'rgb(51, 51, 241)' : 'transparent',
                                borderRadius: 50
                              }}
                              component={<Link to="/ins-attendence" />}
                              icon={<SubjectIcon />}
                              onClick={() => handleMenuItemClick('attendance', '/attendance')}
                            >
                              Attendance
                            </MenuItem>
                            <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
                            <footer>&copy; Copyright 2023 123.abc</footer>
                          </>
                        )}
                      </>
                    )}
                  </>
                </Menu>
              ) : (
                <Menu className="menu2">
                  <>
                    <MenuItem
                      style={{
                        color: activeMenuItem === 'Dashboard' ? 'rgb(51, 51, 241)' : 'black',
                        borderRadius: 50
                      }}
                      component={<Link to="/admin-dashboard" />}
                      icon={<SpaceDashboardIcon />}
                      onClick={() => handleMenuItemClick('Dashboard', '/admin-dashboard')}
                    ></MenuItem>
                    <MenuItem
                      style={{
                        color: activeMenuItem === 'Games' ? 'rgb(51, 51, 241)' : 'black',
                        borderRadius: 50
                      }}
                      component={<Link to="/games" />}
                      icon={<LibraryBooksIcon />}
                      onClick={() => handleMenuItemClick('Games', '/games')}
                    ></MenuItem>
                    <MenuItem
                      style={{
                        color: activeMenuItem === 'ins' ? 'rgb(51, 51, 241)' : 'black',
                        borderRadius: 50
                      }}
                      component={<Link to="/publishers" />}
                      icon={<BadgeIcon />}
                      onClick={() => handleMenuItemClick('ins', '/publishers')}
                    ></MenuItem>
                    <MenuItem
                      style={{
                        color: activeMenuItem === 'Players' ? 'rgb(51, 51, 241)' : 'black',
                        borderRadius: 50
                      }}
                      component={<Link to="/players" />}
                      icon={<PeopleOutlineIcon />}
                      onClick={() => handleMenuItemClick('Players', '/players')}
                    ></MenuItem>
                    <MenuItem
                      style={{
                        color: activeMenuItem === 'Subjects' ? 'rgb(51, 51, 241)' : 'black',
                        borderRadius: 50
                      }}
                      component={<Link to="/subjects" />}
                      icon={<SubjectIcon />}
                      onClick={() => handleMenuItemClick('Subjects', '/subjects')}
                    ></MenuItem>
                    <MenuItem
                      style={{
                        color: activeMenuItem === 'Reports' ? 'rgb(51, 51, 241)' : 'black',
                        borderRadius: 50
                      }}
                      component={<Link to="/reports" />}
                      icon={<ImportContactsIcon />}
                      onClick={() => handleMenuItemClick('Reports', '/reports')}
                    ></MenuItem>
                    <MenuItem onClick={handleLogout} icon={<LogoutIcon />} className="menu-item-l">Logout</MenuItem>
                  </>
                </Menu>
              )}
            </Sidebar>
          </div>
        </>
      ) : (<></>)}
    </>
  );
}

export default SideBar;
