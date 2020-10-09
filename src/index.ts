import Application from './chapter/Application';
import Renderer from './chapter/Renderer';
import Ticker from './chapter/Ticker';

const render = {
    Application,
    Renderer,
    Ticker
}

const href = window.location.href;
const firstChapter = Object.keys(render)[0];
const renderChapter = href.substring(href.lastIndexOf('/') + 1) || firstChapter;
render[renderChapter]();






