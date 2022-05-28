import React from 'react';
import { MenuLinks } from './menu_links/MenuLink';
import { ToggleButton } from './toggle_button/ToggleButton';

//TODO: move to store
const links = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/settings', name: 'Settings' }
];


export class ToggleMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <>
                <ToggleButton onPress={this.handleClick} active={this.state.active} />
                <MenuLinks active={this.state.active} links={links} />
            </>
        )
    }
}