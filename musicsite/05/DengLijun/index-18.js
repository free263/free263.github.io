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
                "track": 744,
                "name": "邓丽君-Bridge Over Troubled Water(英语-演唱会）0743",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Bridge Over Troubled Water(英语-演唱会）0743.mp3"
				},
				{
                "track": 743,
                "name": "邓丽君-Begin The Beguine(英语)0745",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Begin The Beguine(英语)0745.mp3"
				},
				{
                "track": 742,
                "name": "邓丽君-Beat it(英语-演唱会）0744",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Beat it(英语-演唱会）0744.mp3"
				},
				{
                "track": 741,
                "name": "邓丽君-Abraham,Martin And John(英语）0741",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Abraham,Martin And John(英语）0741.mp3"
				},
				{
                "track": 740,
                "name": "邓丽君-A good heart(英语）0742",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-A good heart(英语）0742.mp3"
				},
				{
                "track": 739,
                "name": "邓丽君-雨夜花（闽南语）0735",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-雨夜花（闽南语）0735.mp3"
				},
				{
                "track": 738,
                "name": "邓丽君-雨夜花（闽南语-演唱会）0736",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-雨夜花（闽南语-演唱会）0736.mp3"
				},
				{
                "track": 737,
                "name": "邓丽君-难忘的爱人（闽南语-B）0724",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-难忘的爱人（闽南语-B）0724.mp3"
				},
				{
                "track": 736,
                "name": "邓丽君-难忘的爱人（闽南语-A）0723",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-难忘的爱人（闽南语-A）0723.mp3"
				},
				{
                "track": 735,
                "name": "邓丽君-难忘的初恋情人（闽南语-A）0725",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-难忘的初恋情人（闽南语-A）0725.mp3"
				},
				{
                "track": 734,
                "name": "邓丽君-走马灯（闽南语）0738",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-走马灯（闽南语）0738.mp3"
				},
				{
                "track": 733,
                "name": "邓丽君-苦海女神龙（闽南语）0703",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-苦海女神龙（闽南语）0703.mp3"
				},
				{
                "track": 732,
                "name": "邓丽君-缘投囝仔（闽南语）0737",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-缘投囝仔（闽南语）0737.mp3"
				},
				{
                "track": 731,
                "name": "邓丽君-祖母的话（闽南语-演唱会）0740",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-祖母的话（闽南语-演唱会）0740.mp3"
				},
				{
                "track": 730,
                "name": "邓丽君-祖母电话（闽南语）0739",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-祖母电话（闽南语）0739.mp3"
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