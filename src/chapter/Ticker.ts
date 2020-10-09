import * as PIXI from 'pixi.js';

export default () => {
    const app = new PIXI.Application({transparent: true});
    const sprite = PIXI.Sprite.from('/assets/common/axp.png');
    app.stage.addChild(sprite);
    app.stage.interactive = true;
    app.ticker.maxFPS = 30;
    // app.ticker.stop();
    // const update = () => requestAnimationFrame(() => {
    //     app.ticker.update();
    //     update();
    // });
    // update();
    document.body.appendChild(app.view);
}
