import React from 'react';
import {AppBar, Toolbar} from "@material-ui/core";

interface Menu {
    label: string,
    code: string
}

function Item({label}: Menu) {
    return (
        <div className="he">
            {label}
        </div>
    );
}

function Header() {
    const menus = [{label: 'About', code: 'about'}, {label: 'Summary', code: 'summary'},{label: 'Detail', code: 'detail'},{label: 'contact', code: 'Contact'}]
    return (
        <React.Fragment>
            <AppBar>
            <Toolbar>
            {menus.map((item, index)=>(
                <Item key={'header'+index} {...item} />
            ))}
            </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
