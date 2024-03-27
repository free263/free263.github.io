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
                "track": 827,
                "name": "张信哲、刘嘉玲-有一点动心",
                "length": "4:46",
                "file": "精选/张信哲、刘嘉玲-有一点动心.mp3"
				},
				{
                "track": 826,
                "name": "张信哲、范文芳-别让情两难",
                "length": "4:46",
                "file": "精选/张信哲、范文芳-别让情两难.mp3"
				},
				{
                "track": 825,
                "name": "张卫健-一辈子一场梦",
                "length": "4:46",
                "file": "精选/张卫健-一辈子一场梦.mp3"
				},
				{
                "track": 824,
                "name": "张卫健-虚虚实实",
                "length": "4:46",
                "file": "精选/张卫健-虚虚实实.mp3"
				},
				{
                "track": 823,
                "name": "张卫健-你爱我像谁",
                "length": "4:46",
                "file": "精选/张卫健-你爱我像谁.mp3"
				},
				{
                "track": 822,
                "name": "张卫健-孤独不苦",
                "length": "4:46",
                "file": "精选/张卫健-孤独不苦.mp3"
				},
				{
                "track": 821,
                "name": "张韶涵-寓言",
                "length": "4:46",
                "file": "精选/张韶涵-寓言.mp3"
				},
				{
                "track": 820,
                "name": "张韶涵-隐形的翅膀",
                "length": "4:46",
                "file": "精选/张韶涵-隐形的翅膀.mp3"
				},
				{
                "track": 819,
                "name": "张韶涵-破茧",
                "length": "4:46",
                "file": "精选/张韶涵-破茧.mp3"
				},
				{
                "track": 818,
                "name": "张韶涵-潘朵拉",
                "length": "4:46",
                "file": "精选/张韶涵-潘朵拉.mp3"
				},
				{
                "track": 817,
                "name": "张韶涵-欧若拉",
                "length": "4:46",
                "file": "精选/张韶涵-欧若拉.mp3"
				},
				{
                "track": 816,
                "name": "张韶涵-呐喊",
                "length": "4:46",
                "file": "精选/张韶涵-呐喊.mp3"
				},
				{
                "track": 815,
                "name": "张韶涵-梦里花",
                "length": "4:46",
                "file": "精选/张韶涵-梦里花.mp3"
				},
				{
                "track": 814,
                "name": "张韶涵-冲破",
                "length": "4:46",
                "file": "精选/张韶涵-冲破.mp3"
				},
				{
                "track": 813,
                "name": "张韶涵、周深-一路生花",
                "length": "4:46",
                "file": "精选/张韶涵、周深-一路生花.mp3"
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