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
                "track": 78,
                "name": "SarahCoonor-From_Sarah_With_Love",
                "length": "4:46",
                "file": "欧美音乐/SarahCoonor-From_Sarah_With_Love.mp3"
				},
				{
                "track": 77,
                "name": "SarahCoonor-color",
                "length": "4:46",
                "file": "欧美音乐/SarahCoonor-color.mp3"
				},
				{
                "track": 76,
                "name": "SarahCoonor-Are You Ready To Ride",
                "length": "4:46",
                "file": "欧美音乐/SarahCoonor-Are You Ready To Ride.mp3"
				},
				{
                "track": 75,
                "name": "SarahCoonor",
                "length": "4:46",
                "file": "欧美音乐/SarahCoonor.mp3"
				},
				{
                "track": 74,
                "name": "SarahConnor-EveryMomentOfMyLife",
                "length": "4:46",
                "file": "欧美音乐/SarahConnor-EveryMomentOfMyLife.mp3"
				},
				{
                "track": 73,
                "name": "sarahBrightman-斯卡布罗集市",
                "length": "4:46",
                "file": "欧美音乐/sarahBrightman-斯卡布罗集市.mp3"
				},
				{
                "track": 72,
                "name": "Robbie WilliamsBetter Man",
                "length": "4:46",
                "file": "欧美音乐/Robbie WilliamsBetter Man.mp3"
				},
				{
                "track": 71,
                "name": "Rachel PlattenLone Ranger",
                "length": "4:46",
                "file": "欧美音乐/Rachel PlattenLone Ranger.mp3"
				},
				{
                "track": 70,
                "name": "OnlyTime",
                "length": "4:46",
                "file": "欧美音乐/OnlyTime.mp3"
				},
				{
                "track": 69,
                "name": "Olly MursThat Girl",
                "length": "4:46",
                "file": "欧美音乐/Olly MursThat Girl.mp3"
				},
				{
                "track": 68,
                "name": "Nu VirgosStop!StopStop",
                "length": "4:46",
                "file": "欧美音乐/Nu VirgosStop!StopStop.mp3"
				},
				{
                "track": 67,
                "name": "nana-lonely",
                "length": "4:46",
                "file": "欧美音乐/nana-lonely.mp3"
				},
				{
                "track": 66,
                "name": "MinnieRiperton-LovingYou",
                "length": "4:46",
                "file": "欧美音乐/MinnieRiperton-LovingYou.mp3"
				},
				{
                "track": 65,
                "name": "MinnieRiperton-loving you",
                "length": "4:46",
                "file": "欧美音乐/MinnieRiperton-loving you.mp3"
				},
				{
                "track": 64,
                "name": "Michael JacksonYou Are Not Alone",
                "length": "4:46",
                "file": "欧美音乐/Michael JacksonYou Are Not Alone.mp3"
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