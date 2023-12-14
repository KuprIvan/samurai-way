import React, {FC} from 'react';
import {SideBarMenuType} from "../../redux/state";

type SideBarType = {
    state: SideBarMenuType
}

const SideBarMenu:FC<SideBarType> = (props) => {
    const friendsList = props.state.friends.map(el => <p key={el.id}>{el.name}</p>)

    return <>
        {friendsList}
    </>
};

export default SideBarMenu;