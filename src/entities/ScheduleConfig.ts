import  uuidv4 from 'uuid/v4';


export enum PostCategory {
    DEFAULT = 0,
}

export interface IScheduleConfig {
    uuid: string,
    cron: string,
    name: string,
    isActive: boolean,
    isDeleted: boolean,
    generateEvery?: string,
    postCategory: PostCategory[],
}

export class ScheduleConfig implements IScheduleConfig {
    uuid = ``
    name = ``
    cron = ``
    isActive = true
    isDeleted = false
    postCategory = [PostCategory.DEFAULT]
    constructor(name = ``, cron = ``) {
        this.uuid = uuidv4()
        this.name = name
        this.cron = cron
    }
}

