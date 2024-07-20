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
                "track": 1112,
                "name": "宗次郎-故乡的原风景",
                "length": "4:46",
                "file": "精选/宗次郎-故乡的原风景.mp3"
				},
				{
                "track": 1111,
                "name": "庄心妍-走着走着就散了",
                "length": "4:46",
                "file": "精选/庄心妍-走着走着就散了.mp3"
				},
				{
                "track": 1110,
                "name": "庄心妍-再见只是陌生人",
                "length": "4:46",
                "file": "精选/庄心妍-再见只是陌生人.mp3"
				},
				{
                "track": 1109,
                "name": "庄心妍-以后的以后",
                "length": "4:46",
                "file": "精选/庄心妍-以后的以后.mp3"
				},
				{
                "track": 1108,
                "name": "庄心妍-爱囚",
                "length": "4:46",
                "file": "精选/庄心妍-爱囚.mp3"
				},
				{
                "track": 1107,
                "name": "庄心妍、祁隆-一万个舍不得",
                "length": "4:46",
                "file": "精选/庄心妍、祁隆-一万个舍不得.mp3"
				},
				{
                "track": 1106,
                "name": "周治平-那一场风花雪月的故事",
                "length": "4:46",
                "file": "精选/周治平-那一场风花雪月的故事.mp3"
				},
				{
                "track": 1105,
                "name": "周艳泓-要嫁就嫁灰太狼",
                "length": "4:46",
                "file": "精选/周艳泓-要嫁就嫁灰太狼.mp3"
				},
				{
                "track": 1104,
                "name": "周迅-飘摇",
                "length": "4:46",
                "file": "精选/周迅-飘摇.mp3"
				},
				{
                "track": 1103,
                "name": "周深-最珍贵的你",
                "length": "4:46",
                "file": "精选/周深-最珍贵的你.mp3"
				},
				{
                "track": 1102,
                "name": "周深-最好的礼物",
                "length": "4:46",
                "file": "精选/周深-最好的礼物.mp3"
				},
				{
                "track": 1101,
                "name": "周深-拙慕",
                "length": "4:46",
                "file": "精选/周深-拙慕.mp3"
				},
				{
                "track": 1100,
                "name": "周深-追赶春天的人",
                "length": "4:46",
                "file": "精选/周深-追赶春天的人.mp3"
				},
				{
                "track": 1099,
                "name": "周深-祝福",
                "length": "4:46",
                "file": "精选/周深-祝福.mp3"
				},
				{
                "track": 1098,
                "name": "周深-逐月",
                "length": "4:46",
                "file": "精选/周深-逐月.mp3"
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