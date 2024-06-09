import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const DrawerComponent = ({ anchor, open, onClose, items }) => {
    return (
        <Drawer anchor={anchor} open={open} onClose={onClose}>
            <List sx={{ width: 250 }}>
                {items.map(({ label, to }) => (
                    <ListItem  key={label} onClick={onClose}>
                        <ListItemText  primary={    
                            <Typography
                                    component={Link}
                                    to={to}
                                    sx={{ textDecoration: "none", color: "black" }}
                                >
                                    {label}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default DrawerComponent;
