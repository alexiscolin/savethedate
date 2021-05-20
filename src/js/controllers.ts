// interfaces
interface AudioVideo {
    video: any;
    audio: any;
}

interface States {
    play: boolean;
    sound: boolean;
    finished: boolean;
}

interface DOM {
    play: HTMLElement;
    icoPlay: HTMLElement;
    icoPause: HTMLElement;
    replay: HTMLElement;
    sound: HTMLElement;
    icoMute: HTMLElement;
    icoVolume: HTMLElement;
}


// class
class Controllers {
    stage: HTMLElement;
    tl: any;
    audio: Element;
    DOM: DOM;
    states: States;

    constructor (stage: HTMLElement, av: AudioVideo ) {
        this.stage = stage;
        this.tl = av.video;
        this.audio = av.audio;

        // DOM
        this.DOM = {
            play: this.stage.querySelector('.js-play'),
            icoPlay: this.stage.querySelector('.js-controller_btn_play'),
            icoPause: this.stage.querySelector('.js-controller_btn_pause'),
            replay: this.stage.querySelector('.js-replay'),
            sound: this.stage.querySelector('.js-sound'),
            icoMute: this.stage.querySelector('.js-controller_btn_mute'),
            icoVolume: this.stage.querySelector('.js-controller_btn_volume')
        }

        // animation states
        this.states = {
            play: false,
            sound: true,
            finished: false
        }

        // init
        this.attachTimeline()
        this.controllersBinding()

    }
        
    attachTimeline () {
        // timeline promises
        this.tl.eventCallback("onComplete", () => {
            this.toggleIcoPlay()
            this.states.finished = true;
        })
    }
        

    toggleIcoPlay () {
        this.DOM.icoPlay.classList.toggle("m-is--invisible");
        this.DOM.icoPause.classList.toggle("m-is--invisible");
    }

    
    controllersBinding () {
        // playpause func
        const playPause = function () {
            // if click when animation finished -> restart
            if(this.states.finished) {
                restart.call(this);
                this.states.finished = false;
                
            } else {
                // pause -> play -> pause -> ...
                if (this.states.play) {
                    this.tl.pause();
                    this.audio.pause();
                    this.states.play = false;
                } else {
                    this.tl.play();
                    this.audio.play();
                    this.states.play = true;
                }
                this.toggleIcoPlay()
            }
        }

        // restart func
        const restart = function () {
            this.tl.restart();
            this.audio.currentTime = 0;

            // if animation paused when restart
            if(!this.states.play) {
                this.audio.play()
                this.toggleIcoPlay()   
            }

            // if animation finished when restart
            if(this.states.finished) {
                this.states.finished = false;
                this.toggleIcoPlay()   
            }
            this.states.play = true;
        }

        // sound func
        const sound = function () {
            this.audio.volume = this.states.sound ? 0 : 1;
            this.states.sound = !this.states.sound;
            
            this.DOM.icoMute.classList.toggle("m-is--invisible");
            this.DOM.icoVolume.classList.toggle("m-is--invisible");
        }

        // binding
        this.DOM.play.addEventListener('click', playPause.bind(this));
        this.DOM.replay.addEventListener('click', restart.bind(this));
        this.DOM.sound.addEventListener('click', sound.bind(this));
    }
}

export default Controllers;