// Cron job that runs every 12 minutes
export const cron = new sst.aws.Cron('SSTCronJob', {
  schedule: 'rate(10 minutes)',
  function: 'app/packages/functions/main.handler',
});
