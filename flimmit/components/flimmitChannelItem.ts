import {Container, ContainerConfig} from '../../src/ts/components/container';
import {Label} from '../../src/ts/components/label';
import {FlimmitButton} from './flimmitButton';
import {FlimmitImage} from './flimmitImage';
import {ButtonConfig} from '../../src/ts/components/button';

export type ChannelItemConfig = {
    imageUrl: string;
    label: string;
    title: string;
    time: number;
    button: ButtonConfig;
};

export interface FlimmitChannelItemConfig extends  ContainerConfig {
    item: ChannelItemConfig;
}

export class FlimmitChannelItem extends Container<FlimmitChannelItemConfig> {
    protected config: FlimmitChannelItemConfig;

    constructor(config: FlimmitChannelItemConfig) {
        super(config);
        this.config = this.mergeConfig(config, {
            item: config.item,
            cssClasses: ['flimmitChannelAsset'],
            components: this.getComponents(),
        }, <FlimmitChannelItemConfig>this.config);
    }

    getTime(time: number): string {
        let date = new Date(time * 1000);
        let hours = '0' + date.getHours();
        let minutes = '0' + date.getMinutes();
        return hours.substr(-2) + ':' + minutes.substr(-2);
    }

    getComponents(): Array<any> {
        return  [
            new FlimmitImage( { img: this.config.item.imageUrl } ),
            new Label( { text: this.config.item.label, cssClasses: ['channelText channelLabel'] } ),
            new Label( { text: this.config.item.title, cssClasses: ['channelText bmpui-channelTitle'] } ),
            new Label( { text: this.getTime(this.config.item.time ), cssClasses: ['channelText inline']} ),
            new FlimmitButton( this.config.item.button ),
        ];
    }

}