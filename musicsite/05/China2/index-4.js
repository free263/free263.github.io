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
                "track": 282,
                "name": "张云雷-探清水河",
                "length": "4:46",
                "file": "简选/国语/张云雷-探清水河.mp3"
				},
				{
                "track": 281,
                "name": "张雨生-大海",
                "length": "4:46",
                "file": "简选/国语/张雨生-大海.mp3"
				},
				{
                "track": 280,
                "name": "张宇-雨一直下",
                "length": "4:46",
                "file": "简选/国语/张宇-雨一直下.mp3"
				},
				{
                "track": 279,
                "name": "张宇-一言难尽",
                "length": "4:46",
                "file": "简选/国语/张宇-一言难尽.mp3"
				},
				{
                "track": 278,
                "name": "张学友-一千个伤心的理由",
                "length": "4:46",
                "file": "简选/国语/张学友-一千个伤心的理由.mp3"
				},
				{
                "track": 277,
                "name": "张学友-心如刀割",
                "length": "4:46",
                "file": "简选/国语/张学友-心如刀割.mp3"
				},
				{
                "track": 276,
                "name": "张学友-吻别",
                "length": "4:46",
                "file": "简选/国语/张学友-吻别.mp3"
				},
				{
                "track": 275,
                "name": "张学友-秋意浓",
                "length": "4:46",
                "file": "简选/国语/张学友-秋意浓.mp3"
				},
				{
                "track": 274,
                "name": "张学友-情书",
                "length": "4:46",
                "file": "简选/国语/张学友-情书.mp3"
				},
				{
                "track": 273,
                "name": "张学友-分手总要在雨天",
                "length": "4:46",
                "file": "简选/国语/张学友-分手总要在雨天.mp3"
				},
				{
                "track": 272,
                "name": "张学友-当我想起你",
                "length": "4:46",
                "file": "简选/国语/张学友-当我想起你.mp3"
				},
				{
                "track": 271,
                "name": "张信哲-直觉",
                "length": "4:46",
                "file": "简选/国语/张信哲-直觉.mp3"
				},
				{
                "track": 270,
                "name": "张信哲-用情",
                "length": "4:46",
                "file": "简选/国语/张信哲-用情.mp3"
				},
				{
                "track": 269,
                "name": "张信哲-信仰",
                "length": "4:46",
                "file": "简选/国语/张信哲-信仰.mp3"
				},
				{
                "track": 268,
                "name": "张信哲-太想爱你",
                "length": "4:46",
                "file": "简选/国语/张信哲-太想爱你.mp3"
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