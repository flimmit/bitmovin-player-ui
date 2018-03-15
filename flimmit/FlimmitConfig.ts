
export namespace Flimmit {

    export function getUiConfig() {
        return {
            metadata: {
                dash: '//bitdash-a.akamaihd.net/content/sintel/sintel.mpd',
                hls: '//bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                progressive: [
                    {url: '//bitdash-a.akamaihd.net/content/sintel/Sintel.mp4', type: 'video/mp4'},
                    {url: '//bitdash-a.akamaihd.net/content/sintel/Sintel.webm', type: 'video/webm'},
                ],
                poster: '//bitdash-a.akamaihd.net/content/sintel/poster.png',
                tracks: [{
                    file: '//bitdash-a.akamaihd.net/content/sintel/sprite/sprite.vtt',
                    kind: 'thumbnails',
                }],
                title: 'This is a Title powered by Flimmit',
                description: 'This is a Description powered by Flimmit',
                markers: [
                    {time: 50, title: 'Flimmit One'},
                    {time: 80, title: 'Flimmit Two'},
                    {time: 200, title: 'Flimmmiit'},
                    {time: 300, title: 'Flimmit Power'},
                ],
            },
            subtitles: {
                fontColor: 'rgba(0, 0, 255, 0.5)',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                windowColor: 'rgba(255, 0, 0, 0.25)',
                fontFamily: 'monospace',
                fontVariant: 'unset',
                fontStyle: 'unset',
                characterEdge: '1px 1px 2px black',
                fontCoefficient: '3',
            },
            recommendations: [
                {title: 'Recommendation 1: The best video ever', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 0},
                {title: 'Recommendation 2: The second best video', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 64},
                {title: 'Recommendation 3: The third best video of all time', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 195},
                {title: 'Recommendation 4: The fourth, you know what', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 15},
                {title: 'Recommendation 5', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 174},
                {title: 'Recommendation 6', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 26},
                {title: 'Recommendation 7', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 87},
                {title: 'Recommendation 8', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 54},
                {title: 'Recommendation 9', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 22},
                {title: 'Recommendation 10', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 44},
                {title: 'Recommendation 11', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 435},
                {title: 'Recommendation 12: Ain\'t no better video than this', url: 'http://bitmovin.com', thumbnail: 'http://placehold.it/300x300', duration: 34},
            ],
        };
    }
}
