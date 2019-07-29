import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuStatus = 'menu';
        }
    }

    render() {
        return (
            <nav>
                <div className="startBootstrap">Start Bootstrap</div>
                <div className="menu">
                    Menu

                </div>
            </nav>
        )
    }
}

export default Header;