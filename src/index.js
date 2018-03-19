import githubIcon from './content/icons/github.svg';

const app = document.getElementById('app');
const svg = document.createElement('svg');
svg.setAttribute('viewBox', githubIcon.viewBox );

const use = document.createElement('use');
use.setAttribute('xlink:href', githubIcon.url)

svg.appendChild(use);

app.appendChild(svg);