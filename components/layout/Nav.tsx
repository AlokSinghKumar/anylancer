import { AppBar, Toolbar } from "@mui/material";


function Nav () {

    return (
        <div>
            {/* <SideDrawer /> */}
            <AppBar position="fixed">
                <Toolbar>
                    <div style={ { display: "flex", justifyContent: "center", marginLeft: '31%', } }>
                        <h1>ALOK</h1>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav;