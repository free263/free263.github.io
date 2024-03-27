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
                "track": 692,
                "name": "徐小凤-明月千里寄相思",
                "length": "4:46",
                "file": "精选/徐小凤-明月千里寄相思.mp3"
				},
				{
                "track": 691,
                "name": "徐千雅-坐上火车去拉萨",
                "length": "4:46",
                "file": "精选/徐千雅-坐上火车去拉萨.mp3"
				},
				{
                "track": 690,
                "name": "徐千雅-我在景德镇等你",
                "length": "4:46",
                "file": "精选/徐千雅-我在景德镇等你.mp3"
				},
				{
                "track": 689,
                "name": "徐千雅-彩云之南",
                "length": "4:46",
                "file": "精选/徐千雅-彩云之南.mp3"
				},
				{
                "track": 688,
                "name": "徐良-那时雨",
                "length": "4:46",
                "file": "精选/徐良-那时雨.mp3"
				},
				{
                "track": 687,
                "name": "徐良、李玉刚-花魁",
                "length": "4:46",
                "file": "精选/徐良、李玉刚-花魁.mp3"
				},
				{
                "track": 686,
                "name": "徐佳莹-突然好想你",
                "length": "4:46",
                "file": "精选/徐佳莹-突然好想你.mp3"
				},
				{
                "track": 685,
                "name": "徐怀钰-踏浪",
                "length": "4:46",
                "file": "精选/徐怀钰-踏浪.mp3"
				},
				{
                "track": 684,
                "name": "徐怀钰-分飞",
                "length": "4:46",
                "file": "精选/徐怀钰-分飞.mp3"
				},
				{
                "track": 683,
                "name": "徐怀钰-叮咚",
                "length": "4:46",
                "file": "精选/徐怀钰-叮咚.mp3"
				},
				{
                "track": 682,
                "name": "熊天平-火柴天堂",
                "length": "4:46",
                "file": "精选/熊天平-火柴天堂.mp3"
				},
				{
                "track": 681,
                "name": "信乐团-死了都要爱",
                "length": "4:46",
                "file": "精选/信乐团-死了都要爱.mp3"
				},
				{
                "track": 680,
                "name": "信乐团-离歌",
                "length": "4:46",
                "file": "精选/信乐团-离歌.mp3"
				},
				{
                "track": 679,
                "name": "信乐团-假如",
                "length": "4:46",
                "file": "精选/信乐团-假如.mp3"
				},
				{
                "track": 678,
                "name": "信乐团-海阔天空",
                "length": "4:46",
                "file": "精选/信乐团-海阔天空.mp3"
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