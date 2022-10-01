export interface ISearchFormData {
    city: string,
    minDate: Date,
    curDate: Date,
    MaxPrice: number | null
}
export interface IPlace {
    
}

export interface ISearchCB {
    (data: IData): void
}

export interface IUser {
    userName: string
    avatarUrl: string
}

export type IData = {
    data: IPlace | null,
    error: Error | null
}

