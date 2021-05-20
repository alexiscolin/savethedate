// // style
import "./src/scss/main.scss";

// // components
import Scene from "./src/js/scene";
import Controllers from "./src/js/controllers";

// // data
import entries from "./src/data/entries.json";

// init
window.addEventListener('load', e => {
    const scene: Scene = new Scene(entries);
    const controllers = new Controllers(scene.stage, {video: scene.tl, audio: scene.audioplay});
    scene.appear();
})


