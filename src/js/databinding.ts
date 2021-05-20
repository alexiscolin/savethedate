import {Entries, Theme} from './interfaces/data';

class DataBinding {
    entries: Entries;
    themes: Theme;

    constructor(entries: Entries, themes: Theme) {
        this.entries = entries;
        this.themes = themes;
    }

    init (scene: object | HTMLElement = document) {

        console.log(typeof document)
        this._bindThemes(scene)
        this._bindPhotos(scene)
        this._bindTexts(scene)
    }

    // theme images (bg, flowers..)
    private _bindThemes (scene) {
        // parse
        const DOM = {
            bg: scene.querySelector('.js-theme_background'),
            flowersRight: [...scene.querySelectorAll('.c-footage_flower--right')],
            flowersLeft: [...scene.querySelectorAll('.c-footage_flower--left')],
            bloomFlat: [...scene.querySelectorAll('[class*=js-bloom--flat]')],
            bloomCurve: [...scene.querySelectorAll('[class*=js-bloom--curve]')]
        }

        // set images
        DOM.bg.src = this.themes.background;
        DOM.flowersRight.forEach(el => el.src = this.themes.flower)
        DOM.flowersLeft.forEach(el => el.src = this.themes.flower2)
        DOM.bloomFlat.forEach(el => el.src = this.themes.bloom1)
        DOM.bloomCurve.forEach(el => el.src = this.themes.bloom2)
    }

    // entries photos (couple pics)
    private _bindPhotos (scene) {
        // parse
        const DOM = {
            couple: scene.querySelector('.js-photo-couple'),
            invit: scene.querySelector('.js-photo-invit'),
            simple: scene.querySelector('.js-photo-simple'),
            triptic1: scene.querySelector('.js-triptic-1'),
            triptic2: scene.querySelector('.js-triptic-2'),
            triptic3: scene.querySelector('.js-triptic-3'),
        }

        // set images
        for(let el in DOM) {
            DOM[el].src = this.entries.photos[el];
        }
    }

    // text (content)
    private _bindTexts (scene) {
        // parse
        const DOM = {
            wifeName: [...scene.querySelectorAll('.js-wording-wifeName')],
            husbandName: [...scene.querySelectorAll('.js-wording-husbandName')],
            intro: [...scene.querySelectorAll('.js-wording-intro')],
            dateDay: [...scene.querySelectorAll('.js-wording-day')],
            dateMonth: [...scene.querySelectorAll('.js-wording-month')],
            dateYear: [...scene.querySelectorAll('.js-wording-year')],
            invit: [...scene.querySelectorAll('.js-wording-invit')],
            place: [...scene.querySelectorAll('.js-wording-place')]
        }

        // set texts
        for(let els in DOM) {
            DOM[els].forEach(el => el.innerText = this.entries.texts[els]);
        }
    }
}

export default DataBinding;