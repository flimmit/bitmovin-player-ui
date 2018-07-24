import {Container, ContainerConfig} from '../../src/ts/components/container';
import {Flimmit} from './../FlimmitConfig';
import {FlimmitChannelItem} from './flimmitChannelItem';

export class FlimmitChannelContainer extends Container<ContainerConfig> {
    constructor(config: ContainerConfig) {
        super(config);
        this.config = this.mergeConfig(<ContainerConfig>config, {
            components: this.getComponents(),
        }, this.config);
    }

    getComponents(): Array<any> {
        let obj = Flimmit.getUiConfig().channels;
        return (Object.keys(obj).length === 0 && obj.constructor === Object) ? [] : [
            new FlimmitChannelItem( {item: obj.next} ),
            new FlimmitChannelItem( {item: obj.later} ),
        ];
    }
}