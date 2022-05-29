import React from 'react';
import { MenuLinks } from './menu_links/MenuLink';
import { ToggleButton } from './toggle_button/ToggleButton';

//TODO: move to store
const links = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/settings', name: 'Settings' }
];


export const ToggleMenu = () => {
    let active = false;

    const handleClick = () => {
        active = !active
    }

    return (
        <>
            <ToggleButton onPress={handleClick} active={active} />
            <MenuLinks active={active} links={links} />
        </>
    )
}