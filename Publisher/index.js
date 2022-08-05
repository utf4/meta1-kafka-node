const Kafka = require('node-rdkafka');
// const eventType = require('../eventType.js');

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9090'
}, {}, {
  topic: 'test'
});

stream.on('error', (err) => {
  console.error('Error in our kafka stream');
  console.error(err);
});

function queueRandomMessage() {
  const category = getRandomAnimal();
  const noise = getRandomNoise(category);
  const event = { category, noise };
  const success = stream.write(Buffer.from(JSON.stringify(event)));     
  if (success) {
    console.log(`message queued (${JSON.stringify(event)})`);
  } else {
    console.log('Too many messages in the queue already..');
  }
}

function getRandomAnimal() {
  const categories = ['DOG', 'CAT', 'APES','ASSES','BULLS','COWS'];
  return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomNoise(animal) {
  if (animal === 'CAT') {
    const noises = ['meow', 'purr'];
    return noises[Math.floor(Math.random() * noises.length)];
  } else if (animal === 'DOG') {
    const noises = ['bark', 'woof'];
    return noises[Math.floor(Math.random() * noises.length)];
  } else if (animal === 'APES') {
    const noises = ['gibber'];
    return noises[Math.floor(Math.random() * noises.length)];
  } else if (animal === 'ASSES') {
    const noises = ['bray'];
    return noises[Math.floor(Math.random() * noises.length)];
  } else if (animal === 'BULLS') {
    const noises = ['bellow'];
    return noises[Math.floor(Math.random() * noises.length)];
  } else if (animal === 'COWS') {
    const noises = ['Moo'];
    return noises[Math.floor(Math.random() * noises.length)];
  } else {
    return 'silence..';
  }
}

setInterval(() => {
  queueRandomMessage();
}, 1000);
