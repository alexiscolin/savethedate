import themes from "../data/themes.json";
import DataBinding from './databinding';
import { gsap } from "gsap";

import {Entries, Theme} from './interfaces/data';

// Class
class Scene {
    stage: HTMLElement;
    params: Theme;
    tl: any;
    databinding: DataBinding;

    constructor (entries: Entries) {
        this.stage = document.querySelector('.js-canvas');
        this.params = themes[entries.theme];
        this.tl = new gsap.timeline({paused: true});

        this.databinding = new DataBinding(entries, this.params);
        this.databinding.init(this.stage);

        this._createAudio()
        this._createTimeline()
    }

    private _createAudio = function () {
        this.audioplay = document.createElement('audio');
        this.audioplay.setAttribute('src', this.params.music); 
    }

    private _createTimeline = function () {
        // parse DOM
        const DOM = {
            background: this.stage.querySelector(".js-theme_background"),
            title: {
                title: this.stage.querySelector('.js-SaveTheDate'),
                titleDate: this.stage.querySelector(".draw--date"),
                titleSave: this.stage.querySelector(".draw--save") ,
                titleThe: this.stage.querySelector(".js-savedate-the")   
            },
            photos: {
                couple: this.stage.querySelector('.js-photo-1'),
                invit: this.stage.querySelector('.js-photo-2'),
                simple: this.stage.querySelector('.js-photo-3'),
                triptic: this.stage.querySelector('.js-photo-triptic')
            },
            date: {
                dates: [...this.stage.querySelectorAll('.js-wording-date')]
            },
            wording: {
                invitation: [...this.stage.querySelectorAll('.js-invitation--wording')],
                background: this.stage.querySelector('.js-invitation--bg')
            },
            flowers: {
                floL1: this.stage.querySelector('.js-flower--left--1'),
                floL2: this.stage.querySelector('.js-flower--left--2'),
                floL3: this.stage.querySelector('.js-flower--left--3'),
                floR1: this.stage.querySelector('.js-flower--right--1'),
                floR2: this.stage.querySelector('.js-flower--right--2')
            },
            blooms: {
                bloomC1: this.stage.querySelector('.js-bloom--curve--1'),
                bloomC2: this.stage.querySelector('.js-bloom--curve--2'),
                bloomC3: this.stage.querySelector('.js-bloom--curve--3'),
                bloomF1: this.stage.querySelector('.js-bloom--flat--1'),
                bloomF2: this.stage.querySelector('.js-bloom--flat--2')
            }
        };

        // ---- ANIMATION ----

        // background
        this.tl.to(DOM.background, {y: '40%', duration: 25, ease: "power1.inOut"});

        // title
        this.tl.to(DOM.title.titleSave, {strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut"}, 0);
        this.tl.to(DOM.title.titleThe, {autoAlpha: 1, duration: .8}, 1)
        this.tl.to(DOM.title.titleDate, {strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut"}, .8);
        this.tl.to(DOM.title.title, {autoAlpha: 0, duration: .5}, 3.5);
        
        // photos
        this.tl.to(DOM.photos.couple, {y: '-185%', rotation: -2, duration: 6, ease: "power4.out"}, 4);
        this.tl.to(DOM.photos.simple, {y: '-50%', rotation: 5, duration: 3, ease: "power4.out"}, 6);

        this.tl.to(DOM.photos.couple, {y: '-400%', rotation: -5, duration: 2, ease: "power4.in"}, 9);
        this.tl.to(DOM.photos.simple, {y: '-230%', rotation: -20, duration: 3, ease: "power4.inOut"}, 9);
        this.tl.to(DOM.photos.invit, {y: '-172%', rotation: 9, duration: 3, ease: "power4.inOut"}, 9.1);

        this.tl.to(DOM.photos.simple, {y: '-365%', rotation: -21, duration: 5, ease: "power4.inOut"}, 12);
        this.tl.to(DOM.photos.invit, {y: '-400%', rotation: 10, duration: 5, ease: "power4.inOut"}, 12);
        this.tl.to(DOM.photos.triptic, {y: '-28%', x: '-7%', duration: 5, ease: "power4.inOut"}, 13);

        this.tl.to(DOM.photos.triptic, {y: '-117%', x: '-55%', duration: 3, ease: "expo.inOut"}, 17.5);
        this.tl.to(DOM.photos.invit, {y: '-425%', rotation: 10, duration: 1, ease: "power4.in"}, 17);

        this.tl.set(DOM.photos.couple, {y: '-175%', x: '-130%', rotation: 36}, 19);
        this.tl.set(DOM.photos.simple, {y: '-210%', x: '105%', rotation: -52}, 19);
        this.tl.set(DOM.photos.invit, {y: '-94%', x: '-103%', rotation: 5}, 19);
        this.tl.to(DOM.photos.triptic, {y: '-240%', x: '-150%', duration: 2, ease: "expo.inOut"}, 21);

        this.tl.to(DOM.photos.couple, {y: '-215%', x: '-95%', rotation: 36, duration: 2, ease: "power2.out"}, 24);
        this.tl.to(DOM.photos.simple, {y: '-241%', x: '65%', rotation: -52, duration: 2, ease: "power2.out"}, 24);
        this.tl.to(DOM.photos.invit, {y: '-90%', x: '-67%', rotation: 5, duration: 2, ease: "power2.out"}, 24);

        // dates
        this.tl.from(DOM.date.dates, {y: '100vh', duration: 5, stagger: .2, ease: "power4.inOut"}, 12);
        this.tl.to(DOM.date.dates, {y: '-100vh', duration: 1.5, stagger: .2, ease: "expo.in"}, 17);
    
        // invitation
        this.tl.from(DOM.wording.invitation, {y: '90vh', duration: 2, stagger: .2, ease: "power4.out"}, 21.9);
        this.tl.to(DOM.wording.background, {autoAlpha: '1', duration: 2, ease: "none"}, 23.5);
      
        // flowers
        this.tl.to(DOM.flowers.floL1, {y: '140%', duration: 4, ease: "expo.out"}, 0);
        this.tl.to(DOM.flowers.floL1, {y: '240%', duration:5, ease: "expo.out"}, 4);
        this.tl.to(DOM.flowers.floR1, {y: '250%', duration:5, ease: "expo.out"}, 4);
        this.tl.to(DOM.flowers.floL2, {y: '210%', duration:5, ease: "expo.out"}, 4);
        
        this.tl.to(DOM.flowers.floL1, {y: '350%', duration:3, ease: "power4.inOut"}, 9);
        this.tl.to(DOM.flowers.floR1, {y: '390%', duration:4, ease: "power4.inOut"}, 9);
        this.tl.to(DOM.flowers.floL2, {y: '285%', duration:4, ease: "power4.inOut"}, 9);

        this.tl.to(DOM.flowers.floL2, {y: '364%', duration:3, ease: "power2.inOut"}, 13);
        this.tl.to(DOM.flowers.floR1, {y: '490%', duration:3, ease: "power2.inOut"}, 13);
        this.tl.to(DOM.flowers.floR2, {y: '145%', duration:7, ease: "power2.out"}, 13);

        this.tl.to(DOM.flowers.floR1, {y: '600%', duration:3, ease: "power2.inOut"}, 17);
        this.tl.to(DOM.flowers.floL2, {y: '480%', duration:3, ease: "power2.inOut"}, 17.5);
        this.tl.to(DOM.flowers.floL3, {y: '200%', duration:3, ease: "power2.inOut"}, 17.5);

        this.tl.to(DOM.flowers.floL2, {y: '650%', duration:5, ease: "power2.inOut"}, 21);
        this.tl.to(DOM.flowers.floL3, {y: '270%', duration:5, ease: "power4.inOut"}, 21);
        this.tl.to(DOM.flowers.floR1, {y: '800%', duration:5, ease: "power4.inOut"}, 21);
        this.tl.to(DOM.flowers.floR2, {y: '250%', duration:5, ease: "power4.inOut"}, 21.3);

        // blooms
        this.tl.to(DOM.blooms.bloomC1, {y: '1600%', duration: 4, ease: "expo.out"}, 2);
        this.tl.to(DOM.blooms.bloomF1, {y: '900%', duration: 3.5, ease: "expo.out"}, 2.6);
        this.tl.to(DOM.blooms.bloomC1, {y: '3000%', duration: 7.5, ease: "power2.out"}, 3.5);
        this.tl.to(DOM.blooms.bloomF1, {y: '1900%', duration: 8, ease: "power2.out"}, 4);

        this.tl.to(DOM.blooms.bloomC2, {y: '1900%', duration: 3.5, ease: "power1.out"}, 7.5);
  
        this.tl.to(DOM.blooms.bloomC1, {y: '5000%', duration: 5, ease: "power3.inOut"}, 11);
        this.tl.to(DOM.blooms.bloomC2, {y: '2800%', duration: 5, ease: "power1.inOut"}, 11);
        this.tl.to(DOM.blooms.bloomC3, {y: '1350%', duration: 5, ease: "expo.out"}, 11);
        this.tl.to(DOM.blooms.bloomF1, {y: '2550%', duration: 5, ease: "power2.inOut"}, 11.5);

        this.tl.to(DOM.blooms.bloomF1, {y: '3450%', duration: 5, ease: "power2.in"}, 17.3);
        this.tl.to(DOM.blooms.bloomC2, {y: '5500%', duration: 8, ease: "power2.inOut"}, 17);
        this.tl.to(DOM.blooms.bloomC3, {y: '3000%', duration: 5, ease: "power2.inOut"}, 17);

        this.tl.to(DOM.blooms.bloomF2, {y: '1830%', duration: 6, ease: "expo.out"}, 20);
        this.tl.to(DOM.blooms.bloomC3, {y: '4500%', duration: 3, ease: "power1.inOut"}, 22);

        // sound 
        this.tl.to(this.audioplay, {volume: 0, duration: 2}, 25)
        this.tl.call(this.audioplay.pause);

        // progress bar
        const totalDuration = this.tl.totalDuration()
        this.tl.to(".js-pb", {scaleX: 1, duration: totalDuration, ease: "none"}, 0);
    }
 
    appear () {
        // diplay the scene (ideal when everything is placed on stage)
        const forground: HTMLElement = this.stage.querySelector('.js-forground');
        forground.style.opacity = '0';
    }
}

export default Scene;