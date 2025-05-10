export interface Sub {
    id?: string
    nick: string
    subMonths: number
    avatar: string
    description?: string
}

export type SubsResponse = Array<{
    id: number
    nick: string
    months: number
    profileUrl: string
    description: string
}>