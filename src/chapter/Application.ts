import * as PIXI from 'pixi.js';

export default () => {
    const app = new PIXI.Application();
    document.body.appendChild(app.view);
}
