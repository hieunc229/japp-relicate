import Vasern from 'vasern';

const conn = new Vasern({
  schemas: [{ 
    name: 'Users',
    props: { name: 'string' }
  }]
});

export default conn;