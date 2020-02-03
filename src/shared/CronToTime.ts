import CronParser from 'cron-parser'

function* showNext(cron: string,to = new Date(), from = new Date()): Generator<string> {
    // const fromUnix = from.getTime() / 1000
    const toUnix = to.getTime() / 1000
    const interval = CronParser.parseExpression(cron)

    let nextVal
    while(true) {
        nextVal = interval.next()
        if (nextVal.getTime() / 1000 > toUnix) {
            break
        }
        yield nextVal.toISOString()
    }
    return
}

// TODO: randomize minutes hours
// TODO: validate cron and throw error

export class CronToTime {
    static upcomingTimes = (cron: string, to: Date) => [ ...showNext(cron, to) ]
}