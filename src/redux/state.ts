export type MessageDataType = {
    id: string
    name: string
}

export type DialogDataType = {
    id: string
    name: string
}

export type Friend = {
    id: string
    name: string
}

export type SideBarMenuType = {
    friends: Friend[]
}

export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsDataType[]
}

export type DialogsPageType = {
    dialogs: DialogDataType[],
    messages: MessageDataType[]
}

export type StateDataType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBarMenu: SideBarMenuType
}


const state: StateDataType = {
    dialogsPage: {
        dialogs: [
            {id: "1", name: "Ivan"},
            {id: "2", name: "Nastya"},
            {id: "3", name: "Denis"},
            {id: "4", name: "Ihor"},
            {id: "5", name: "Sveta"},
        ],
        messages: [
            {id: "1", name: "Ivan"},
            {id: "2", name: "Nastya"},
            {id: "3", name: "Denis"},
            {id: "4", name: "Ihor"},
            {id: "5", name: "Sveta"},
        ]
    },
    profilePage: {
        posts: [
            {id: "1", message: "Hi, how are you?", likesCount: 15},
            {id: "2", message: "It's my first post", likesCount: 25}
        ]
    },
    sideBarMenu: {
        friends: [
            {id: "1", name: "Ivan"},
            {id: "2", name: "Nastya"},
            {id: "3", name: "Denis"},
            {id: "4", name: "Ihor"},
            {id: "5", name: "Sveta"},
        ]
    }
}
export default state;