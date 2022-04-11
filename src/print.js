import lodash from 'lodash';

export default () => {
  const textToPrint = lodash.join(['hello', 'webpack'])
  console.log(textToPrint);
}