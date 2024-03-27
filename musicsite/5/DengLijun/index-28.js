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
                "track": 594,
                "name": "邓丽君-心中喜欢就说爱（国语-新版）0633",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-心中喜欢就说爱（国语-新版）0633.mp3"
				},
				{
                "track": 593,
                "name": "邓丽君-当我已经知道爱（国语）0574",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-当我已经知道爱（国语）0574.mp3"
				},
				{
                "track": 592,
                "name": "邓丽君-希望和你再相见（国语）0628",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-希望和你再相见（国语）0628.mp3"
				},
				{
                "track": 591,
                "name": "邓丽君-山南山北走一回（国语）0606",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-山南山北走一回（国语）0606.mp3"
				},
				{
                "track": 590,
                "name": "邓丽君-山前山后百花开（国语）0607",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-山前山后百花开（国语）0607.mp3"
				},
				{
                "track": 589,
                "name": "邓丽君-就这样喜欢了你（国语）0584",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-就这样喜欢了你（国语）0584.mp3"
				},
				{
                "track": 588,
                "name": "邓丽君-家在山的那一边（国语）0580",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-家在山的那一边（国语）0580.mp3"
				},
				{
                "track": 587,
                "name": "邓丽君-姑娘十八一朵花（国语）0576",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-姑娘十八一朵花（国语）0576.mp3"
				},
				{
                "track": 586,
                "name": "邓丽君-妈妈什么叫恋爱（国语）0589",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-妈妈什么叫恋爱（国语）0589.mp3"
				},
				{
                "track": 585,
                "name": "邓丽君-如果能许一个愿（国语）0604",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-如果能许一个愿（国语）0604.mp3"
				},
				{
                "track": 584,
                "name": "邓丽君-如果你是有情人（国语）0605",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-如果你是有情人（国语）0605.mp3"
				},
				{
                "track": 583,
                "name": "邓丽君-她的眼睛像月亮（国语）0610",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-她的眼睛像月亮（国语）0610.mp3"
				},
				{
                "track": 582,
                "name": "邓丽君-天天陪我在一起（国语）0614",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-天天陪我在一起（国语）0614.mp3"
				},
				{
                "track": 581,
                "name": "邓丽君-天外天上天无涯（国语）0615",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-天外天上天无涯（国语）0615.mp3"
				},
				{
                "track": 580,
                "name": "邓丽君-多少相思无从寄（国语）0575",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-多少相思无从寄（国语）0575.mp3"
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