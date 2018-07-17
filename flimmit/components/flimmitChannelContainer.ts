import {UIInstanceManager} from './../../src/ts/uimanager';
import {Container, ContainerConfig} from '../../src/ts/components/container';
import {Label} from '../../src/ts/components/label';
import {Flimmit} from './../FlimmitConfig';
import {FlimmitButton} from './flimmitButton';
import {FlimmitImage} from './flimmitImage';


/**
 * A select box providing a selection between 'auto' and the available audio qualities.
 */
export class FlimmitChannellContainer extends Container<ContainerConfig> {
    constructor(config: ContainerConfig) {
        super(config);
        this.config = this.mergeConfig(<ContainerConfig>config, {
            components: this.getComponents(),
            cssClasses: ['chanells'],
        }, this.config);
    }

    getDate(time: number): string {
        let date = new Date(time * 1000);
        let hours = '0' + date.getHours();
        let minutes = '0' + date.getMinutes();
        return hours.substr(-2) + ':' + minutes.substr(-2);
    }

    getComponents(): Array<any> {
        let obj = Flimmit.getUiConfig().channels;
        if (Object.keys(obj).length === 0 && obj.constructor === Object) {
            return [];
        }

        let components = [
            // Next
            new FlimmitImage( { img: obj.next.img } ),
            new Label( { text: obj.next.ts, cssClasses: ['chanellText bmpui-chanellTitle'] } ),
            new Label( { text: obj.next.title, cssClasses: ['chanellText bmpui-chanellTitle'] } ),
            new Label( { text: this.getDate(obj.next.time ), cssClasses: ['chanellText inline']} ),
            new FlimmitButton( { text: '< more', link: obj.next.more, cssClasses: ['chanellButton inline'] } ),
            // Later
            new FlimmitImage( { img: obj.later.img } ),
            new Label( { text: obj.later.ts, cssClasses: ['chanellText bmpui-chanellTitle'] } ),
            new Label( { text: obj.later.title, cssClasses: ['chanellText bmpui-chanellTitle'] } ),
            new Label( { text: this.getDate(obj.later.time ), cssClasses: ['chanellText inline']} ),
            new FlimmitButton( { text: '< more', link: obj.later.more, cssClasses: ['chanellButton inline'] } ),
        ];
        return components;
    }

}