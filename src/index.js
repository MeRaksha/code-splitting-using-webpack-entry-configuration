import lodash from 'lodash';

function component() {
  const element = document.createElement('div');
  element.innerHTML = lodash.join(['hello', 'webpack']);
  return element;
}

document.body.appendChild(component());