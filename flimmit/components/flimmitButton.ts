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
        let url = 'http://myjson.com/k0joe';
        this.getAjaxContent(url);
        this.onClick.subscribe(() => { console.log('asdasd'); });
    }

    getAjaxContent(url: string) {
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
            });
    }
}

