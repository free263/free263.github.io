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
                "track": 786,
                "name": "729.Elegy-挽歌",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/729.Elegy-挽歌.mp3"
				},
				{
                "track": 785,
                "name": "728.InaFlash-须臾之间",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/728.InaFlash-须臾之间.mp3"
				},
				{
                "track": 784,
                "name": "727.AtThePoles-在两极",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/727.AtThePoles-在两极.mp3"
				},
				{
                "track": 783,
                "name": "726.WashAway-冲刷殆尽的2016旧痕迹",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/726.WashAway-冲刷殆尽的2016旧痕迹.mp3"
				},
				{
                "track": 782,
                "name": "725.ShowerPassed-回归安宁与平静雨过天晴",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/725.ShowerPassed-回归安宁与平静雨过天晴.mp3"
				},
				{
                "track": 781,
                "name": "724.ForgottenRiver",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/724.ForgottenRiver.mp3"
				},
				{
                "track": 780,
                "name": "723.deschansonspourvous",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/723.deschansonspourvous.mp3"
				},
				{
                "track": 779,
                "name": "722.Whispers",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/722.Whispers.mp3"
				},
				{
                "track": 778,
                "name": "721.DarkClouds",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/721.DarkClouds.mp3"
				},
				{
                "track": 777,
                "name": "720.Moku",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/720.Moku.mp3"
				},
				{
                "track": 776,
                "name": "719.Whenyoucantremember",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/719.Whenyoucantremember.mp3"
				},
				{
                "track": 775,
                "name": "718.Atthistimeoflastyear",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/718.Atthistimeoflastyear.mp3"
				},
				{
                "track": 774,
                "name": "717.Secret",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/717.Secret.mp3"
				},
				{
                "track": 773,
                "name": "716.Ledolom",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/716.Ledolom.mp3"
				},
				{
                "track": 772,
                "name": "715.Mercy",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/715.Mercy.mp3"
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