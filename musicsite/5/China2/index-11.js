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
                "track": 177,
                "name": "萧亚轩-HoneyHoneyHoney",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-HoneyHoneyHoney.mp3"
				},
				{
                "track": 176,
                "name": "萧亚轩-Cappuccino",
                "length": "4:46",
                "file": "简选/国语/萧亚轩-Cappuccino.mp3"
				},
				{
                "track": 175,
                "name": "萧煌奇-偷走",
                "length": "4:46",
                "file": "简选/国语/萧煌奇-偷走.mp3"
				},
				{
                "track": 174,
                "name": "夏婉安-听不完的情歌",
                "length": "4:46",
                "file": "简选/国语/夏婉安-听不完的情歌.mp3"
				},
				{
                "track": 173,
                "name": "魏新雨-余情未了",
                "length": "4:46",
                "file": "简选/国语/魏新雨-余情未了.mp3"
				},
				{
                "track": 172,
                "name": "魏新雨-恋人心",
                "length": "4:46",
                "file": "简选/国语/魏新雨-恋人心.mp3"
				},
				{
                "track": 171,
                "name": "王铮亮-时间都去哪儿了",
                "length": "4:46",
                "file": "简选/国语/王铮亮-时间都去哪儿了.mp3"
				},
				{
                "track": 170,
                "name": "王力宏-唯一",
                "length": "4:46",
                "file": "简选/国语/王力宏-唯一.mp3"
				},
				{
                "track": 169,
                "name": "王力宏-天地龙鳞",
                "length": "4:46",
                "file": "简选/国语/王力宏-天地龙鳞.mp3"
				},
				{
                "track": 168,
                "name": "王力宏-爱的就是你",
                "length": "4:46",
                "file": "简选/国语/王力宏-爱的就是你.mp3"
				},
				{
                "track": 167,
                "name": "王靖雯-沦陷",
                "length": "4:46",
                "file": "简选/国语/王靖雯-沦陷.mp3"
				},
				{
                "track": 166,
                "name": "王杰-一无所有",
                "length": "4:46",
                "file": "简选/国语/王杰-一无所有.mp3"
				},
				{
                "track": 165,
                "name": "王杰-一场游戏一场梦",
                "length": "4:46",
                "file": "简选/国语/王杰-一场游戏一场梦.mp3"
				},
				{
                "track": 164,
                "name": "王杰-为了爱梦一生",
                "length": "4:46",
                "file": "简选/国语/王杰-为了爱梦一生.mp3"
				},
				{
                "track": 163,
                "name": "王杰-忘了你忘了我",
                "length": "4:46",
                "file": "简选/国语/王杰-忘了你忘了我.mp3"
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