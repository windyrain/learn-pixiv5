import * as PIXI from 'pixi.js';

export default () => {
    const app = new PIXI.Application({transparent: true});
    const sprite = PIXI.Sprite.from('/assets/common/axp.png');
    app.stage.addChild(sprite);
    document.body.appendChild(app.view);
}
