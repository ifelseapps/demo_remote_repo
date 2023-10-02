import { log } from './index';

const sayHello = (greeter: string) => (name: string) =>
    `${greeter}, ${name}!`

log(sayHello('Shalom')('Moshe'));