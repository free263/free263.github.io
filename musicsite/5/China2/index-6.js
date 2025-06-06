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
            mediaPath = 'https://vercel.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 252,
                "name": "张韶涵-寓言",
                "length": "4:46",
                "file": "简选/国语/张韶涵-寓言.mp3"
				},
				{
                "track": 251,
                "name": "张韶涵-隐形的翅膀",
                "length": "4:46",
                "file": "简选/国语/张韶涵-隐形的翅膀.mp3"
				},
				{
                "track": 250,
                "name": "张韶涵-欧若拉",
                "length": "4:46",
                "file": "简选/国语/张韶涵-欧若拉.mp3"
				},
				{
                "track": 249,
                "name": "张韶涵-呐喊",
                "length": "4:46",
                "file": "简选/国语/张韶涵-呐喊.mp3"
				},
				{
                "track": 248,
                "name": "张韶涵-冲破",
                "length": "4:46",
                "file": "简选/国语/张韶涵-冲破.mp3"
				},
				{
                "track": 247,
                "name": "张韶涵、王赫野-篇章",
                "length": "4:46",
                "file": "简选/国语/张韶涵、王赫野-篇章.mp3"
				},
				{
                "track": 246,
                "name": "张靓颖-画心",
                "length": "4:46",
                "file": "简选/国语/张靓颖-画心.mp3"
				},
				{
                "track": 245,
                "name": "张杰-雪龙吟",
                "length": "4:46",
                "file": "简选/国语/张杰-雪龙吟.mp3"
				},
				{
                "track": 244,
                "name": "张杰-星星",
                "length": "4:46",
                "file": "简选/国语/张杰-星星.mp3"
				},
				{
                "track": 243,
                "name": "张惠妹-站在高岗上",
                "length": "4:46",
                "file": "简选/国语/张惠妹-站在高岗上.mp3"
				},
				{
                "track": 242,
                "name": "张惠妹-听海",
                "length": "4:46",
                "file": "简选/国语/张惠妹-听海.mp3"
				},
				{
                "track": 241,
                "name": "张惠妹-哭不出来",
                "length": "4:46",
                "file": "简选/国语/张惠妹-哭不出来.mp3"
				},
				{
                "track": 240,
                "name": "张惠妹-剪爱",
                "length": "4:46",
                "file": "简选/国语/张惠妹-剪爱.mp3"
				},
				{
                "track": 239,
                "name": "张含韵-一百万个可能",
                "length": "4:46",
                "file": "简选/国语/张含韵-一百万个可能.mp3"
				},
				{
                "track": 238,
                "name": "张碧晨-年轮",
                "length": "4:46",
                "file": "简选/国语/张碧晨-年轮.mp3"
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