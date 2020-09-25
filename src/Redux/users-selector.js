


export const getUsersData= (state)=>{
    return state.MyUsersReducer.users;
}
export const getPageSize= (state)=>{
    return state.MyUsersReducer.pageSize;
}
export const getTotalUsersCount= (state)=>{
    return state.MyUsersReducer.totalUsersCount
}
export const getCurrentPage= (state)=>{
    return state.MyUsersReducer.currentPage
}
export const getIsFetching= (state)=>{
    return state.MyUsersReducer.isFetching
}

export const getIsFollowing= (state)=>{
    return state.MyUsersReducer.isFollowing
}


