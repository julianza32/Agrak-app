export interface iUser {
    createdAt: string,
    first_name: string,
    avatar: string,
    second_name: string,
    email: string,
    id: string
}

export interface iListUser{
    list_users: iUser[],
    user: iUser | null
}
