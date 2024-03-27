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
                "track": 531,
                "name": "474.Firstquartermoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/474.Firstquartermoon.mp3"
				},
				{
                "track": 530,
                "name": "473.Towhisper",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/473.Towhisper.mp3"
				},
				{
                "track": 529,
                "name": "472.StillLife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/472.StillLife.mp3"
				},
				{
                "track": 528,
                "name": "471.Metsomeone-不曾告别",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/471.Metsomeone-不曾告别.mp3"
				},
				{
                "track": 527,
                "name": "470.Withthetimepassingby",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/470.Withthetimepassingby.mp3"
				},
				{
                "track": 526,
                "name": "469.Sparenopains",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/469.Sparenopains.mp3"
				},
				{
                "track": 525,
                "name": "468.Thelosttreasure",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/468.Thelosttreasure.mp3"
				},
				{
                "track": 524,
                "name": "467.Mimicry",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/467.Mimicry.mp3"
				},
				{
                "track": 523,
                "name": "466.Theoldmelody",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/466.Theoldmelody.mp3"
				},
				{
                "track": 522,
                "name": "465.Driftwood",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/465.Driftwood.mp3"
				},
				{
                "track": 521,
                "name": "464.Beautifulthingsintheworld",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/464.Beautifulthingsintheworld.mp3"
				},
				{
                "track": 520,
                "name": "463.Theseaofflowers",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/463.Theseaofflowers.mp3"
				},
				{
                "track": 519,
                "name": "462.Harmonizewithnature",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/462.Harmonizewithnature.mp3"
				},
				{
                "track": 518,
                "name": "461.Thismomentisyourlife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/461.Thismomentisyourlife.mp3"
				},
				{
                "track": 517,
                "name": "460.Tattoo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/460.Tattoo.mp3"
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