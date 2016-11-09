import {UIManager} from "./uimanager";
import {Wrapper} from "./components/wrapper";
import {ControlBar} from "./components/controlbar";
import {PlaybackToggleButton} from "./components/playbacktogglebutton";
import {FullscreenToggleButton} from "./components/fullscreentogglebutton";
import {VRToggleButton} from "./components/vrtogglebutton";
import {VolumeToggleButton} from "./components/volumetogglebutton";
import {SeekBar} from "./components/seekbar";
import {Watermark} from "./components/watermark";
import {HugePlaybackToggleButton} from "./components/hugeplaybacktogglebutton";
import {PlaybackTimeLabel} from "./components/playbacktimelabel";
import {Label} from "./components/label";
import {SettingsToggleButton} from "./components/settingstogglebutton";
import {SelectBox} from "./components/selectbox";
import {ListItemCollection} from "./components/listselector";
import {SettingsPanel} from "./components/settingspanel";
import {VideoQualitySelectBox} from "./components/videoqualityselectbox";

// Build UI
var playbackToggleButton = new PlaybackToggleButton();
var fullscreenToggleButton = new FullscreenToggleButton();
var vrToggleButton = new VRToggleButton();
var volumeToggleButton = new VolumeToggleButton();
var timeLabel = new PlaybackTimeLabel();
var seekBar = new SeekBar();

var selectBoxItems: ListItemCollection = {};
selectBoxItems['value1'] = 'Value 1';
selectBoxItems['value2'] = 'Value 2';
var settingsPanel = new SettingsPanel({
    components: [new Label({text: 'Video Quality'}), new SelectBox({items: selectBoxItems}), new VideoQualitySelectBox()],
    hidden: true
});
var settingsToggleButton = new SettingsToggleButton({settingsPanel: settingsPanel});

var controlBar = new ControlBar({
    components: [settingsPanel, playbackToggleButton, seekBar, timeLabel,
        vrToggleButton, volumeToggleButton, settingsToggleButton, fullscreenToggleButton]
});
var watermark = new Watermark();
var hugePlaybackToggleButton = new HugePlaybackToggleButton();
var ui = new Wrapper({components: [hugePlaybackToggleButton, controlBar, watermark], cssClasses: ['ui-skin-default']});
console.log(ui);

declare var window: any;
declare var bitmovin: any;
var player = window.bitmovin.player('player');

var conf = {
    key: 'YOUR KEY HERE',
    source: {
        dash: 'http://bitdash-a.akamaihd.net/content/sintel/sintel.mpd'
    },
    style: {
        ux: false
    }
};

player.setup(conf).then(function() {
    // Add UI to loaded player
    new UIManager(player, ui);
}, function() {
    // Error
});
