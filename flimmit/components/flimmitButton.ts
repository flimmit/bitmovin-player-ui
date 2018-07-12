import {Button, ButtonConfig} from '../../src/ts/components/button';
import {UIInstanceManager} from '../../src/ts/uimanager';
import {ComponentConfig} from '../../src/ts/components/component';

export interface FlimmitChanellAssetConfig extends ComponentConfig {
    /**
     * The text on the button.
     */
    text?: string;
}

export class FlimmitButton extends Button<ButtonConfig> {

    constructor(config: FlimmitChanellAssetConfig) {
        super(config);
        this.config.text = this.config.text;
        this.config.cssClasses = ['chanellLabel'];
    }

}


