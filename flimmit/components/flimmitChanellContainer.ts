import {UIInstanceManager} from './../../src/ts/uimanager';
import {Container, ContainerConfig} from '../../src/ts/components/container';
import {Flimmit} from './../FlimmitConfig';
//import {FlimmitButton} from './flimmitButton';


/**
 * A select box providing a selection between 'auto' and the available audio qualities.
 */
export class FlimmitChannellContainer extends Container<ContainerConfig> {

    protected later: Object;
    protected next: Object;

    constructor(config: ContainerConfig) {
        super(config);
        /*this.config = this.mergeConfig(<ContainerConfig>config, {
            components: this.getAssets(),
        }, this.config);*/
    }

    configure(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
        super.configure(player, uimanager);
    }

/*    getLater(): Object {
        if (Object.keys(Flimmit.getUiConfig().chanells).length === 0 && Flimmit.getUiConfig().chanells.constructor === Object) {
            return {};
        }
        this.later = Flimmit.getUiConfig().chanells.later;
        return this.later;
    }

    getNext(): Object {
        if (Object.keys(Flimmit.getUiConfig().chanells).length === 0 && Flimmit.getUiConfig().chanells.constructor === Object) {
            return {};
        }
        this.next = Flimmit.getUiConfig().chanells.next;
        return this.next;
    }

    getAssets(): Array<any>  {
        let assets = [];
        assets.push(new FlimmitButton( { next: this.getNext(), later: this.getLater() } ) );
        return assets;
    }*/


}