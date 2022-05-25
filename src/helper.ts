/**
 * @description: A test class
 * @param {*}
 * @return {*}
 */
export class Person<T> {
  name: T
  constructor(name: T) {
    this.name = name;
  }
  say() {
    console.log(`I'm ${this.name}`)
  }
}

export function randomNum(low: number, high: number) {
    const num = Math.floor(Math.random() * (high - low) + low);
    return num;
}

/**
 * @description: test on kind of iterator (keys, values, entries)
 * @param {*} type
 * @return {*}
 */
export const testIteratorOf = (type: string) => {
    return (cntr: any) => {
        let str = '';
        switch (type) {
            case 'forOf': 
                for(const item of cntr) str += ` ${item}`
                console.log('forOf: ', str)
                return str
            case 'keys':
                for (const item of cntr.keys()) str += ` ${item}`
                console.log('keys: ', str)
                return str
            case 'values':
                for (const item of cntr.values()) str += ` ${item}`
                console.log('values: ', str)
                return str
            case 'entries':
                for (const item of cntr.entries()) str += ` ${JSON.stringify(item)}`
                console.log('entries: ', str)
                return str
            default:
                break;
        }
    }
}

/**
 * @description: test three kind of iterator (keys, values, entries)
 * @param {*} cntr
 * @return {*}
 */
export const testAllIterators = (cntr: any) => {
    testIteratorOf('forOf')(cntr);
    testIteratorOf('keys')(cntr);
    testIteratorOf('values')(cntr);
    testIteratorOf('entries')(cntr);
}

/**
 * @description: traverse a container and print log
 * @param {*}
 * @return {*}
 */
export const traverseCntr = (cntr: any, desc?: string) => {
  let begin = cntr.begin(), str = ''
  for(let item of begin) {
    str += ` ${item}`
  }
  if(desc) console.log(`${desc}: `, str)
  else console.log(str)
}
