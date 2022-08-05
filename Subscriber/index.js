const Kafka = require('node-rdkafka');
const eventType = require('../eventType.js');

var subscriber = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9090',
}, {});

subscriber.connect();

subscriber.on('ready', () => {
  console.log('Subscriber ready..')
  subscriber.subscribe(['test']);
  subscriber.consume();
}).on('data', function(data) {
  console.log(`received message: ${data.value.toString()}`);
});
