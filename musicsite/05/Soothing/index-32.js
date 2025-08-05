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
                "track": 591,
                "name": "534.Letitgo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/534.Letitgo.mp3"
				},
				{
                "track": 590,
                "name": "533.Before",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/533.Before.mp3"
				},
				{
                "track": 589,
                "name": "532.StayWild",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/532.StayWild.mp3"
				},
				{
                "track": 588,
                "name": "531.Turning",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/531.Turning.mp3"
				},
				{
                "track": 587,
                "name": "530.LikeWings",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/530.LikeWings.mp3"
				},
				{
                "track": 586,
                "name": "529.Floweroflife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/529.Floweroflife.mp3"
				},
				{
                "track": 585,
                "name": "528.Coastline",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/528.Coastline.mp3"
				},
				{
                "track": 584,
                "name": "527.SwallowsinSummer",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/527.SwallowsinSummer.mp3"
				},
				{
                "track": 583,
                "name": "526.Sabbath",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/526.Sabbath.mp3"
				},
				{
                "track": 582,
                "name": "525.Morninglight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/525.Morninglight.mp3"
				},
				{
                "track": 581,
                "name": "524.Endofseason",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/524.Endofseason.mp3"
				},
				{
                "track": 580,
                "name": "523.Backtothechildhood",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/523.Backtothechildhood.mp3"
				},
				{
                "track": 579,
                "name": "522.Air",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/522.Air.mp3"
				},
				{
                "track": 578,
                "name": "521.Mushroomcloud",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/521.Mushroomcloud.mp3"
				},
				{
                "track": 577,
                "name": "520.Originalpoint",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/520.Originalpoint.mp3"
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