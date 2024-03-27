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
                "track": 207,
                "name": "许茹芸-一直是晴天",
                "length": "4:46",
                "file": "简选/国语/许茹芸-一直是晴天.mp3"
				},
				{
                "track": 206,
                "name": "许茹芸-如果云知道",
                "length": "4:46",
                "file": "简选/国语/许茹芸-如果云知道.mp3"
				},
				{
                "track": 205,
                "name": "许茹芸-日光机场",
                "length": "4:46",
                "file": "简选/国语/许茹芸-日光机场.mp3"
				},
				{
                "track": 204,
                "name": "许茹芸-泪海",
                "length": "4:46",
                "file": "简选/国语/许茹芸-泪海.mp3"
				},
				{
                "track": 203,
                "name": "许茹芸-独角戏",
                "length": "4:46",
                "file": "简选/国语/许茹芸-独角戏.mp3"
				},
				{
                "track": 202,
                "name": "许美静-遗憾",
                "length": "4:46",
                "file": "简选/国语/许美静-遗憾.mp3"
				},
				{
                "track": 201,
                "name": "许美静-阳光总在风雨后",
                "length": "4:46",
                "file": "简选/国语/许美静-阳光总在风雨后.mp3"
				},
				{
                "track": 200,
                "name": "许美静-铁窗",
                "length": "4:46",
                "file": "简选/国语/许美静-铁窗.mp3"
				},
				{
                "track": 199,
                "name": "许美静-迫在眉梢",
                "length": "4:46",
                "file": "简选/国语/许美静-迫在眉梢.mp3"
				},
				{
                "track": 198,
                "name": "许美静-迷乱",
                "length": "4:46",
                "file": "简选/国语/许美静-迷乱.mp3"
				},
				{
                "track": 197,
                "name": "许美静-蔓延",
                "length": "4:46",
                "file": "简选/国语/许美静-蔓延.mp3"
				},
				{
                "track": 196,
                "name": "许美静-快乐无罪",
                "length": "4:46",
                "file": "简选/国语/许美静-快乐无罪.mp3"
				},
				{
                "track": 195,
                "name": "许美静-都是夜归人",
                "length": "4:46",
                "file": "简选/国语/许美静-都是夜归人.mp3"
				},
				{
                "track": 194,
                "name": "许美静-荡漾",
                "length": "4:46",
                "file": "简选/国语/许美静-荡漾.mp3"
				},
				{
                "track": 193,
                "name": "许佳慧-预谋",
                "length": "4:46",
                "file": "简选/国语/许佳慧-预谋.mp3"
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