import {Button, ButtonConfig} from '../../src/ts/components/button';
import {UIInstanceManager} from '../../src/ts/uimanager';
import {ComponentConfig} from '../../src/ts/components/component';

/**
 * A button that toggles the option menu for subtitles
 */
export interface FlimmitChapterObject {
    time: number;
    title: string;
}

export interface FlimmitChapterButtonConfig extends ComponentConfig {
    /**
     * The text on the button.
     */
    chapter?: FlimmitChapterObject;
}

export class FlimmitChapterButton extends Button<ButtonConfig> {
    protected title?: string;
    protected time?: number;
    protected timedisplay?: string;

    constructor(config: FlimmitChapterButtonConfig) {
        super(config);
        this.title = config.chapter.title;
        this.time = config.chapter.time;
        this.timedisplay = msToTime(config.chapter.time);
        this.config.text = this.timedisplay + '  ' + this.title;
        this.config.cssClasses = ['chapterLabel'];
    }

  configure(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
    super.configure(player, uimanager);

    this.onClick.subscribe(() => {
      player.seek(this.time);
    });
  }
}

function msToTime(d: number) {
    let   seconds: number = Math.floor( d % 60 )
        , minutes: number = Math.floor( d / 60 % 60 )
        , hours: number = Math.floor(( d / (60 * 60) ) % 24);

    let h: string = (hours < 10) ? '0' + hours : '' + hours
        ,   m: string  = (minutes < 10) ? '0' + minutes : '' + minutes
        ,   s: string  = (seconds < 10) ? '0' + seconds : '' + seconds;

    return h + ':' + m + ':' + s;
}
