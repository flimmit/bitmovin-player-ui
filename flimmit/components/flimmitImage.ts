import {Label, LabelConfig} from '../../src/ts/components/label';
import {ComponentConfig} from '../../src/ts/components/component';

export interface FlimmitImageConfig extends ComponentConfig {
    /**
     * The text on the button.
     */
    text?: string;
    img?: string;
}

export class FlimmitImage extends Label<LabelConfig> {

    constructor(config: FlimmitImageConfig) {
        super(config);
        this.config = this.mergeConfig(config, {
            cssClass: 'chanellBild',
            text: '',
            img: '',
        }, <FlimmitImageConfig>this.config);

        let img = config.img;
        let link = 'url(' + img + ')';
        this.getDomElement().css('background-image', link);
    }

}