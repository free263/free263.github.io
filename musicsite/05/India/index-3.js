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
                "track": 9,
                "name": "印度音乐-纯净如天簌的",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-纯净如天簌的.mp3"
				},
				{
                "track": 8,
                "name": "印度音乐-不要不要",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-不要不要.mp3"
				},
				{
                "track": 7,
                "name": "印度音乐-芭杜尔快来吧",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-芭杜尔快来吧.mp3"
				},
				{
                "track": 6,
                "name": "印度音乐-阿育王 忧伤的笛子",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-阿育王 忧伤的笛子.mp3"
				},
				{
                "track": 5,
                "name": "印度音乐-WadaNaTod",
                "length": "4:46",
                "file": "印度歌曲/印度音乐-WadaNaTod.mp3"
				},
				{
                "track": 4,
                "name": "印度歌曲-KaruneshPunjab",
                "length": "4:46",
                "file": "印度歌曲/印度歌曲-KaruneshPunjab.mp3"
				},
				{
                "track": 3,
                "name": "阿育王主题曲-RoshiniSe",
                "length": "4:46",
                "file": "印度歌曲/阿育王主题曲-RoshiniSe.mp3"
				},
				{
                "track": 2,
                "name": "阿育王插曲-AsokaTheme",
                "length": "4:46",
                "file": "印度歌曲/阿育王插曲-AsokaTheme.mp3"
				},
				{
                "track": 1,
                "name": "MeghnaMishra-NachdiPhira",
                "length": "4:46",
                "file": "印度歌曲/MeghnaMishra-NachdiPhira.mp3"
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