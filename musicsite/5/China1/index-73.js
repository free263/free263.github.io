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
                "track": 32,
                "name": "WAX-渴望爱情",
                "length": "4:46",
                "file": "精选/WAX-渴望爱情.mp3"
				},
				{
                "track": 31,
                "name": "WAX-改变化装",
                "length": "4:46",
                "file": "精选/WAX-改变化装.mp3"
				},
				{
                "track": 30,
                "name": "Vitas-星星",
                "length": "4:46",
                "file": "精选/Vitas-星星.mp3"
				},
				{
                "track": 29,
                "name": "Vitas-歌剧2",
                "length": "4:46",
                "file": "精选/Vitas-歌剧2.mp3"
				},
				{
                "track": 28,
                "name": "Vitas-奉献",
                "length": "4:46",
                "file": "精选/Vitas-奉献.mp3"
				},
				{
                "track": 27,
                "name": "Twins-下一站天后",
                "length": "4:46",
                "file": "精选/Twins-下一站天后.mp3"
				},
				{
                "track": 26,
                "name": "Twins-莫斯科没有眼泪",
                "length": "4:46",
                "file": "精选/Twins-莫斯科没有眼泪.mp3"
				},
				{
                "track": 25,
                "name": "TFBOYS-青春修炼手册",
                "length": "4:46",
                "file": "精选/TFBOYS-青春修炼手册.mp3"
				},
				{
                "track": 24,
                "name": "sara-爱很美",
                "length": "4:46",
                "file": "精选/sara-爱很美.mp3"
				},
				{
                "track": 23,
                "name": "SarahCoonor-just one last dance",
                "length": "4:46",
                "file": "精选/SarahCoonor-just one last dance.mp3"
				},
				{
                "track": 22,
                "name": "sarahBrightman-斯卡布罗集市",
                "length": "4:46",
                "file": "精选/sarahBrightman-斯卡布罗集市.mp3"
				},
				{
                "track": 21,
                "name": "S.H.E-中国话",
                "length": "4:46",
                "file": "精选/S.H.E-中国话.mp3"
				},
				{
                "track": 20,
                "name": "S.H.E-恋人未满",
                "length": "4:46",
                "file": "精选/S.H.E-恋人未满.mp3"
				},
				{
                "track": 19,
                "name": "S.H.E-波斯猫",
                "length": "4:46",
                "file": "精选/S.H.E-波斯猫.mp3"
				},
				{
                "track": 18,
                "name": "S.H.E-SuperStar",
                "length": "4:46",
                "file": "精选/S.H.E-SuperStar.mp3"
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