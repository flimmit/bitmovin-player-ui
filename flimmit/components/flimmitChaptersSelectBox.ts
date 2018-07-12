import {UIInstanceManager} from './../../src/ts/uimanager';
import {Container, ContainerConfig} from '../../src/ts/components/container';
import {Flimmit} from './../FlimmitConfig';
import {FlimmitChapterButton} from './flimmitChapterButton';


/**
 * A select box providing a selection between 'auto' and the available audio qualities.
 */
export class FlimmitChaptersSelectBox extends Container<ContainerConfig> {

    protected chapters: Array<any>;
    protected buttons: Array<any>;

    constructor(config: ContainerConfig) {
        super(config);
        this.config = this.mergeConfig(<ContainerConfig>config, {
            components: this.getButtons(),
        }, this.config);
    }
    configure(player: bitmovin.PlayerAPI, uimanager: UIInstanceManager): void {
        super.configure(player, uimanager);
    }

    getChapters(): Array<any> {
        if (Flimmit.getUiConfig().metadata.markers.length < 0) {
            return [];
        }
        this.chapters = Flimmit.getUiConfig().metadata.markers;

        return this.chapters;
    }

    getButtons(): Array<any>  {
        let buttons = [];
        for (let chapter of this.getChapters()) {
            buttons.push(new FlimmitChapterButton( {chapter: chapter} ) );
        }

        return buttons;
    }

}