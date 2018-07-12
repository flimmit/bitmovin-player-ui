import {Label, LabelConfig} from '../../src/ts/components/label';
import {ComponentConfig} from '../../src/ts/components/component';

export interface FlimmitLabelConfig extends ComponentConfig {
    /**
     * The text on the button.
     */
    text?: string;
}

export class FlimmitLabel extends Label<LabelConfig> {

    constructor(config: FlimmitLabelConfig) {
        super(config);
        this.config.text = this.config.text;
    }

}