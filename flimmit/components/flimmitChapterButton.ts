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
    protected title: string;
    protected time: number;
    constructor(config: FlimmitChapterButtonConfig) {
        super(config);
        this.title = config.chapter.title;
        this.time = config.chapter.time || 0;
        this.config.text = config.chapter.title;
        this.config.cssClasses = ['chapterLabel'];
    }

  configure(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
    super.configure(player, uimanager);

    this.onClick.subscribe(() => {
      player.seek(this.time);
    });
  }
}
