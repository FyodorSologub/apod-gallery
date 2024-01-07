export type RawApiData = {
    readonly copyright: string,
    readonly date: string,
    readonly explanation: string,
    readonly hdurl?: string,
    readonly service_version?: string,
    readonly title: string,
    readonly url: string,
    readonly media_type : 'image' | 'video',
};