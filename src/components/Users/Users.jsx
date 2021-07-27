import React from "react";
import UserInfo from "./UserInfo/UserInfo";

const Users = (props) => {
    return <UserInfo
           isFetching={props.isFetching}
           pages={props.pages}
           onPageChanged={props.onPageChanged}
           users={props.users}
           totalUsersCount={props.totalUsersCount}
           currentPage={props.currentPage}
           pageSize={props.pageSize}
           onSearchClick={props.onSearchClick}
       />
}
export default Users;