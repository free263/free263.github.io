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
                "track": 162,
                "name": "王杰-忘记你不如忘记自己",
                "length": "4:46",
                "file": "简选/国语/王杰-忘记你不如忘记自己.mp3"
				},
				{
                "track": 161,
                "name": "王杰-伤心1999",
                "length": "4:46",
                "file": "简选/国语/王杰-伤心1999.mp3"
				},
				{
                "track": 160,
                "name": "王菲-传奇",
                "length": "4:46",
                "file": "简选/国语/王菲-传奇.mp3"
				},
				{
                "track": 159,
                "name": "汪正正-重头再来",
                "length": "4:46",
                "file": "简选/国语/汪正正-重头再来.mp3"
				},
				{
                "track": 158,
                "name": "汪正正-超越梦想",
                "length": "4:46",
                "file": "简选/国语/汪正正-超越梦想.mp3"
				},
				{
                "track": 157,
                "name": "汪峰-也许我可以无视死亡",
                "length": "4:46",
                "file": "简选/国语/汪峰-也许我可以无视死亡.mp3"
				},
				{
                "track": 156,
                "name": "汪峰-怒放的生命",
                "length": "4:46",
                "file": "简选/国语/汪峰-怒放的生命.mp3"
				},
				{
                "track": 155,
                "name": "汪峰-存在",
                "length": "4:46",
                "file": "简选/国语/汪峰-存在.mp3"
				},
				{
                "track": 154,
                "name": "汪峰-北京北京",
                "length": "4:46",
                "file": "简选/国语/汪峰-北京北京.mp3"
				},
				{
                "track": 153,
                "name": "田馥甄-小幸运",
                "length": "4:46",
                "file": "简选/国语/田馥甄-小幸运.mp3"
				},
				{
                "track": 152,
                "name": "陶喆-爱很简单",
                "length": "4:46",
                "file": "简选/国语/陶喆-爱很简单.mp3"
				},
				{
                "track": 151,
                "name": "邰正宵-找一个字代替",
                "length": "4:46",
                "file": "简选/国语/邰正宵-找一个字代替.mp3"
				},
				{
                "track": 150,
                "name": "邰正宵-一千零一夜",
                "length": "4:46",
                "file": "简选/国语/邰正宵-一千零一夜.mp3"
				},
				{
                "track": 149,
                "name": "邰正宵-心要让你听见",
                "length": "4:46",
                "file": "简选/国语/邰正宵-心要让你听见.mp3"
				},
				{
                "track": 148,
                "name": "邰正宵-千纸鹤",
                "length": "4:46",
                "file": "简选/国语/邰正宵-千纸鹤.mp3"
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