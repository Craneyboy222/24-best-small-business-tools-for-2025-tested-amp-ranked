import Queue from 'bull';

class QueueService {
  private queue: Queue.Queue;

  constructor() {
    this.queue = new Queue('jobQueue');
    this.processJobs();
  }

  async addJob(data: any) {
    try {
      await this.queue.add(data);
    } catch (error) {
      console.error('Error adding job to queue:', error);
    }
  }

  processJobs() {
    this.queue.process(async (job, done) => {
      try {
        console.log('Processing job:', job.data);
        // Job processing logic here
        done();
      } catch (error) {
        console.error('Error processing job:', error);
        done(error);
      }
    });
  }
}

export default new QueueService();