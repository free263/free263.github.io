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
                "track": 186,
                "name": "129.GoneFishing",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/129.GoneFishing.mp3"
				},
				{
                "track": 185,
                "name": "128.IFyoucan",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/128.IFyoucan.mp3"
				},
				{
                "track": 184,
                "name": "127.Thetimewehavespendtogether",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/127.Thetimewehavespendtogether.mp3"
				},
				{
                "track": 183,
                "name": "126.AnyoneofMyPoems",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/126.AnyoneofMyPoems.mp3"
				},
				{
                "track": 182,
                "name": "125.ALonelyTripDownTheRabbitHole",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/125.ALonelyTripDownTheRabbitHole.mp3"
				},
				{
                "track": 181,
                "name": "124.StoppingbyWoodsonaSnowyEvening",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/124.StoppingbyWoodsonaSnowyEvening.mp3"
				},
				{
                "track": 180,
                "name": "123.Stumbledonloveandfellforever",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/123.Stumbledonloveandfellforever.mp3"
				},
				{
                "track": 179,
                "name": "122.Beforetheafter",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/122.Beforetheafter.mp3"
				},
				{
                "track": 178,
                "name": "121.IChooseNovember",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/121.IChooseNovember.mp3"
				},
				{
                "track": 177,
                "name": "120.StairwaytoHeaven",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/120.StairwaytoHeaven.mp3"
				},
				{
                "track": 176,
                "name": "119.Cocooned",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/119.Cocooned.mp3"
				},
				{
                "track": 175,
                "name": "118.TheRoadNotTaken",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/118.TheRoadNotTaken.mp3"
				},
				{
                "track": 174,
                "name": "117.LordingOverfromBelow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/117.LordingOverfromBelow.mp3"
				},
				{
                "track": 173,
                "name": "116.Itwilllastalifetime",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/116.Itwilllastalifetime.mp3"
				},
				{
                "track": 172,
                "name": "115.BecauseTheyExisted",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/115.BecauseTheyExisted.mp3"
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