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
                "track": 152,
                "name": "等什么君-关山酒",
                "length": "4:46",
                "file": "精选/等什么君-关山酒.mp3"
				},
				{
                "track": 151,
                "name": "刀郎-披着羊皮的狼",
                "length": "4:46",
                "file": "精选/刀郎-披着羊皮的狼.mp3"
				},
				{
                "track": 150,
                "name": "刀郎-冲动的惩罚",
                "length": "4:46",
                "file": "精选/刀郎-冲动的惩罚.mp3"
				},
				{
                "track": 149,
                "name": "刀郎-爱是你我",
                "length": "4:46",
                "file": "精选/刀郎-爱是你我.mp3"
				},
				{
                "track": 148,
                "name": "刀郎-2002年的第一场雪",
                "length": "4:46",
                "file": "精选/刀郎-2002年的第一场雪.mp3"
				},
				{
                "track": 147,
                "name": "戴羽彤-来迟",
                "length": "4:46",
                "file": "精选/戴羽彤-来迟.mp3"
				},
				{
                "track": 146,
                "name": "戴佩妮-怎样",
                "length": "4:46",
                "file": "精选/戴佩妮-怎样.mp3"
				},
				{
                "track": 145,
                "name": "戴佩妮-你要的爱",
                "length": "4:46",
                "file": "精选/戴佩妮-你要的爱.mp3"
				},
				{
                "track": 144,
                "name": "戴佩妮-街角的祝福",
                "length": "4:46",
                "file": "精选/戴佩妮-街角的祝福.mp3"
				},
				{
                "track": 143,
                "name": "戴佩妮-爱疯了",
                "length": "4:46",
                "file": "精选/戴佩妮-爱疯了.mp3"
				},
				{
                "track": 142,
                "name": "大壮-我们不一样",
                "length": "4:46",
                "file": "精选/大壮-我们不一样.mp3"
				},
				{
                "track": 141,
                "name": "大冢爱-桃ノ花ビラ",
                "length": "4:46",
                "file": "精选/大冢爱-桃ノ花ビラ.mp3"
				},
				{
                "track": 140,
                "name": "大张伟-我怎么这么好看",
                "length": "4:46",
                "file": "精选/大张伟-我怎么这么好看.mp3"
				},
				{
                "track": 139,
                "name": "大张伟-倍儿爽",
                "length": "4:46",
                "file": "精选/大张伟-倍儿爽.mp3"
				},
				{
                "track": 138,
                "name": "大鹏-都选C",
                "length": "4:46",
                "file": "精选/大鹏-都选C.mp3"
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