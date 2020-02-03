import CronParser from 'cron-parser'


const to = new Date()
to.setHours(18)
to.setDate(30)
const gen  = [ ...showNext('*/30 9 * * *', to) ]


console.log(gen)
