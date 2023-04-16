export type Course = {
    Id: number,
    Title: string,
    Desctiption: string,
    MaxListeners: number,
    Archive: boolean,
    From: Date,
    To: Date,
    Timetable: Date[],
    Image: string
}