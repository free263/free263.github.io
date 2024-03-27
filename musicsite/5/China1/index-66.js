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
                "track": 137,
                "name": "大欢-三生石下",
                "length": "4:46",
                "file": "精选/大欢-三生石下.mp3"
				},
				{
                "track": 136,
                "name": "崔子格-卜卦",
                "length": "4:46",
                "file": "精选/崔子格-卜卦.mp3"
				},
				{
                "track": 135,
                "name": "川青-下潜",
                "length": "4:46",
                "file": "精选/川青-下潜.mp3"
				},
				{
                "track": 134,
                "name": "初音未来-甩葱歌",
                "length": "4:46",
                "file": "精选/初音未来-甩葱歌.mp3"
				},
				{
                "track": 133,
                "name": "程响-世界这么大还是遇见你",
                "length": "4:46",
                "file": "精选/程响-世界这么大还是遇见你.mp3"
				},
				{
                "track": 132,
                "name": "程响-人间烟火",
                "length": "4:46",
                "file": "精选/程响-人间烟火.mp3"
				},
				{
                "track": 131,
                "name": "程响-可能",
                "length": "4:46",
                "file": "精选/程响-可能.mp3"
				},
				{
                "track": 130,
                "name": "程响-等你归来",
                "length": "4:46",
                "file": "精选/程响-等你归来.mp3"
				},
				{
                "track": 129,
                "name": "程琳-信天游",
                "length": "4:46",
                "file": "精选/程琳-信天游.mp3"
				},
				{
                "track": 128,
                "name": "成龙-壮志在我胸",
                "length": "4:46",
                "file": "精选/成龙-壮志在我胸.mp3"
				},
				{
                "track": 127,
                "name": "成龙-真的用了心",
                "length": "4:46",
                "file": "精选/成龙-真的用了心.mp3"
				},
				{
                "track": 126,
                "name": "成龙-英雄故事",
                "length": "4:46",
                "file": "精选/成龙-英雄故事.mp3"
				},
				{
                "track": 125,
                "name": "成龙-你给我一片天",
                "length": "4:46",
                "file": "精选/成龙-你给我一片天.mp3"
				},
				{
                "track": 124,
                "name": "成龙-男儿当自强",
                "length": "4:46",
                "file": "精选/成龙-男儿当自强.mp3"
				},
				{
                "track": 123,
                "name": "成龙、苏慧伦-在我生命中的每一天",
                "length": "4:46",
                "file": "精选/成龙、苏慧伦-在我生命中的每一天.mp3"
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