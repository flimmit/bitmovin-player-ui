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

    constructor(config: FlimmitButtonConfig) {
        super(config);
        this.config = this.mergeConfig(config, {
            text: '',
            link: '',
        }, <FlimmitButtonConfig>this.config);
    }
}

