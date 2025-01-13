import { OutputFileEntry } from "@uploadcare/react-uploader"

export interface UserLogIn {
    email: string,
    password: string
}

export interface UserSignUp {
    email: string,
    password: string,
    confirmPassword: string
}

export interface FileEntry {
    files: OutputFileEntry[];
}

export interface Post {
    caption: string,
    photos: PhotoMeta[],
    likes: number,
    userlikes: [],
    userId: string | null
    data: Date
}

export interface PhotoMeta {
    cdnUrl: string,
    uuid: string
}