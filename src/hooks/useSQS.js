import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { v4 as uuid } from 'uuid';

const client = new SQSClient({
  region: 'ap-northeast-3',
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_SECRET_KEY,
  },
});
const sqsQueueUrl =
  'https://sqs.ap-northeast-3.amazonaws.com/503237308475/bsdev07-queue.fifo';

const mutater = async (result, email) => {
  const command = new SendMessageCommand({
    QueueUrl: sqsQueueUrl,
    MessageGroupId: 'attendance-auth',
    MessageDeduplicationId: uuid(),
    MessageAttributes: {
      Email: {
        DataType: 'String',
        StringValue: email,
      },
      CreatedTime: {
        DataType: 'Number',
        StringValue: Date.now(),
      },
      QR: {
        DataType: 'String',
        StringValue: result,
      },
    },
    MessageBody: '입실 인증',
  });

  return await client.send(command);
};

export function useSQS() {
  return { mutater };
}
