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
                "track": 191,
                "name": "191.全心全意 (Heart and Soul) - Kenny G",
                "length": "4:46",
                "file": "唯美纯音乐/191.全心全意 (Heart and Soul) - Kenny G.mp3"
				},
				{
                "track": 190,
                "name": "190.没有夜晚（There Is No Night） - Mairead Nesbitt",
                "length": "4:46",
                "file": "唯美纯音乐/190.没有夜晚（There Is No Night） - Mairead Nesbitt.mp3"
				},
				{
                "track": 189,
                "name": "189.森林之歌 Forest Hymn - Bill Douglas",
                "length": "4:46",
                "file": "唯美纯音乐/189.森林之歌 Forest Hymn - Bill Douglas.mp3"
				},
				{
                "track": 188,
                "name": "188.海阔天空 - 钢琴",
                "length": "4:46",
                "file": "唯美纯音乐/188.海阔天空 - 钢琴.mp3"
				},
				{
                "track": 187,
                "name": "187.轻松的古典小夜曲 (Serenade) - Andre Rieu",
                "length": "4:46",
                "file": "唯美纯音乐/187.轻松的古典小夜曲 (Serenade) - Andre Rieu.mp3"
				},
				{
                "track": 186,
                "name": "186.夏日星 (Summer Star) - Lanx",
                "length": "4:46",
                "file": "唯美纯音乐/186.夏日星 (Summer Star) - Lanx.mp3"
				},
				{
                "track": 185,
                "name": "185.夏恋 - Otokaze",
                "length": "4:46",
                "file": "唯美纯音乐/185.夏恋 - Otokaze.mp3"
				},
				{
                "track": 184,
                "name": "184.无尽之雨 (唯美钢琴曲) - 林有三",
                "length": "4:46",
                "file": "唯美纯音乐/184.无尽之雨 (唯美钢琴曲) - 林有三.mp3"
				},
				{
                "track": 183,
                "name": "183.Autumn Journey 秋之旅 - Eric Chiryoku",
                "length": "4:46",
                "file": "唯美纯音乐/183.Autumn Journey 秋之旅 - Eric Chiryoku.mp3"
				},
				{
                "track": 182,
                "name": "182.Moon Flow (听起来十分舒畅) - Nomak",
                "length": "4:46",
                "file": "唯美纯音乐/182.Moon Flow (听起来十分舒畅) - Nomak.mp3"
				},
				{
                "track": 181,
                "name": "181.我的歌声里 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/181.我的歌声里 - 钢琴曲.mp3"
				},
				{
                "track": 180,
                "name": "180.蓝色星球 - Guido Negraszus",
                "length": "4:46",
                "file": "唯美纯音乐/180.蓝色星球 - Guido Negraszus.mp3"
				},
				{
                "track": 179,
                "name": "179.印地安之梦 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/179.印地安之梦 - 班得瑞.mp3"
				},
				{
                "track": 178,
                "name": "178.我心深处 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/178.我心深处 - 班得瑞.mp3"
				},
				{
                "track": 177,
                "name": "177.森林中的一夜 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/177.森林中的一夜 - 班得瑞.mp3"
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