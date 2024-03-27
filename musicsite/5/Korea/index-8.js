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
                "track": 174,
                "name": "BoA-Style",
                "length": "4:46",
                "file": "韩国音乐/BoA-Style.mp3"
				},
				{
                "track": 173,
                "name": "BoA-Still.",
                "length": "4:46",
                "file": "韩国音乐/BoA-Still..mp3"
				},
				{
                "track": 172,
                "name": "BoA-StayMyGold",
                "length": "4:46",
                "file": "韩国音乐/BoA-StayMyGold.mp3"
				},
				{
                "track": 171,
                "name": "BoA-StartOver",
                "length": "4:46",
                "file": "韩国音乐/BoA-StartOver.mp3"
				},
				{
                "track": 170,
                "name": "BoA-Sparkling",
                "length": "4:46",
                "file": "韩国音乐/BoA-Sparkling.mp3"
				},
				{
                "track": 169,
                "name": "BoA-Soundscape",
                "length": "4:46",
                "file": "韩国音乐/BoA-Soundscape.mp3"
				},
				{
                "track": 168,
                "name": "BoA-SoReal",
                "length": "4:46",
                "file": "韩国音乐/BoA-SoReal.mp3"
				},
				{
                "track": 167,
                "name": "BoA-SongWithNoName",
                "length": "4:46",
                "file": "韩国音乐/BoA-SongWithNoName.mp3"
				},
				{
                "track": 166,
                "name": "BoA-SomedaySomewhere",
                "length": "4:46",
                "file": "韩国音乐/BoA-SomedaySomewhere.mp3"
				},
				{
                "track": 165,
                "name": "BoA-SnowWhite",
                "length": "4:46",
                "file": "韩国音乐/BoA-SnowWhite.mp3"
				},
				{
                "track": 164,
                "name": "BoA-SmileAgain",
                "length": "4:46",
                "file": "韩国音乐/BoA-SmileAgain.mp3"
				},
				{
                "track": 163,
                "name": "BoA-SilentScreamerz",
                "length": "4:46",
                "file": "韩国音乐/BoA-SilentScreamerz.mp3"
				},
				{
                "track": 162,
                "name": "BoA-ShyLove",
                "length": "4:46",
                "file": "韩国音乐/BoA-ShyLove.mp3"
				},
				{
                "track": 161,
                "name": "BoA-shinewoare",
                "length": "4:46",
                "file": "韩国音乐/BoA-shinewoare.mp3"
				},
				{
                "track": 160,
                "name": "BoA-ShineWeAre!",
                "length": "4:46",
                "file": "韩国音乐/BoA-ShineWeAre!.mp3"
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