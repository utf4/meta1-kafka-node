const avro = require('avsc');

const type =  avro.Type.forSchema({
  type: 'record',
  fields: [
    {
      name: 'category',
      type: { type: 'enum', symbols: ['DOG', 'CAT', 'APES','ASSES','BULLS','COWS'] }
    },
    {
      name: 'noise',
      type: 'string',
    }
  ]
});

module.export = type;
