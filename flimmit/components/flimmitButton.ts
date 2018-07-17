import {ComponentConfig} from '../../src/ts/components/component';
import {Button, ButtonConfig} from '../../src/ts/components/button';

export interface FlimmitButtonConfig extends ComponentConfig {
    /**
     * The text on the button.
     */
    text?: string;
    link?: string;
}

export class FlimmitButton extends Button<ButtonConfig> {
    protected link?: string;

    constructor(config: FlimmitButtonConfig) {
        super(config);
        this.link = config.link;
        this.config.text = this.config.text;
        this.config.cssClasses = ['chanellButton inline'];
        this.onClick.subscribe(() => { console.log('asdasd'); });
    }
}

