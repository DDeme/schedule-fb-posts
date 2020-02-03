import { ScheduleConfig } from "src/entities/ScheduleConfig";
import CronParser from 'cron-parser'


// ## https://stackoverflow.com/questions/2824157/random-record-from-mongodb


interface IScheduled  {
    uuid: ``,
    scheduleconfiguuid: ScheduleConfig['uuid'],
    postuuid: ``,
    time: number,
}


class PostGenerator {
    construct() {

    }

    public static generatePosts(config: ScheduleConfig, postsIds: string[]): IScheduled[] {

    }

}


