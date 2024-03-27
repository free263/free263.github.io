// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://pan.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 131,
                "name": "131.无法超越的灵魂音乐 (乱红) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/131.无法超越的灵魂音乐 (乱红) - 纯音乐.mp3"
				},
				{
                "track": 130,
                "name": "130.珍爱时光 (The Moment) - Kenny G",
                "length": "4:46",
                "file": "唯美纯音乐/130.珍爱时光 (The Moment) - Kenny G.mp3"
				},
				{
                "track": 129,
                "name": "129.醉人的钢琴声- 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/129.醉人的钢琴声- 纯音乐.mp3"
				},
				{
                "track": 128,
                "name": "128.君生我未生 (我生君已老) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/128.君生我未生 (我生君已老) - 纯音乐.mp3"
				},
				{
                "track": 127,
                "name": "127.Moon River 月亮河",
                "length": "4:46",
                "file": "唯美纯音乐/127.Moon River 月亮河.mp3"
				},
				{
                "track": 126,
                "name": "126.罗多伦咖啡店 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/126.罗多伦咖啡店 - 纯音乐.mp3"
				},
				{
                "track": 125,
                "name": "125.青空下的约定 - 伊藤贤治",
                "length": "4:46",
                "file": "唯美纯音乐/125.青空下的约定 - 伊藤贤治.mp3"
				},
				{
                "track": 124,
                "name": "124.在我心中的夏天 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/124.在我心中的夏天 - 纯音乐.mp3"
				},
				{
                "track": 123,
                "name": "123.好听古典音乐 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/123.好听古典音乐 - 纯音乐.mp3"
				},
				{
                "track": 122,
                "name": "122.印度琵琶之魂 - 缪晓铮",
                "length": "4:46",
                "file": "唯美纯音乐/122.印度琵琶之魂 - 缪晓铮.mp3"
				},
				{
                "track": 121,
                "name": "121.一起走过的日子 - 古筝",
                "length": "4:46",
                "file": "唯美纯音乐/121.一起走过的日子 - 古筝.mp3"
				},
				{
                "track": 120,
                "name": "120.往事 Ride On - Phil Coulter",
                "length": "4:46",
                "file": "唯美纯音乐/120.往事 Ride On - Phil Coulter.mp3"
				},
				{
                "track": 119,
                "name": "119.雨的旋律 (中西器乐合璧) - 古筝",
                "length": "4:46",
                "file": "唯美纯音乐/119.雨的旋律 (中西器乐合璧) - 古筝.mp3"
				},
				{
                "track": 118,
                "name": "118.幽灵公主 - 轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/118.幽灵公主 - 轻音乐.mp3"
				},
				{
                "track": 117,
                "name": "117.风的誓言 (風の誓い) - 梁邦彦",
                "length": "4:46",
                "file": "唯美纯音乐/117.风的誓言 (風の誓い) - 梁邦彦.mp3"
				},
			],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});