import {ComponentConfig} from '../../src/ts/components/component';
import {Button, ButtonConfig} from '../../src/ts/components/button';

export interface FlimmitButtonConfig extends ComponentConfig {
    /**
     * The text on the button.
     */
    text?: string;
    callback?: any;
}

export class FlimmitButton extends Button<ButtonConfig> {

    constructor(config: FlimmitButtonConfig) {
        super(config);
        this.config.text = this.config.text;
        this.config.cssClasses = ['channelButton inline'];
        this.onClick.subscribe(() => {
            if ( document.getElementsByClassName('overlay').length >= 1 ) {
                return;
            }
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'overlay');
            newDiv.setAttribute('id', 'overlay');
            newDiv.innerHTML = '<div id="data" class="data"><header><span class="close" id="close">X</span></header><section>' + config.callback + '</section></div>';
            document.body.appendChild(newDiv);

            document.getElementById('close').addEventListener('click', () => {
                document.getElementById('overlay').remove();
            });
        });
    }
}

