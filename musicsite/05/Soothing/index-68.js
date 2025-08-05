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
                "track": 51,
                "name": "051.TheWayitIs",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/051.TheWayitIs.mp3"
				},
				{
                "track": 50,
                "name": "050.ACelebrationofLife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/050.ACelebrationofLife.mp3"
				},
				{
                "track": 49,
                "name": "049.ThePoetryofFreedom",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/049.ThePoetryofFreedom.mp3"
				},
				{
                "track": 48,
                "name": "048.Comeasyouare",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/048.Comeasyouare.mp3"
				},
				{
                "track": 47,
                "name": "047.Amerephrase",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/047.Amerephrase.mp3"
				},
				{
                "track": 46,
                "name": "046.DoItAnyway",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/046.DoItAnyway.mp3"
				},
				{
                "track": 45,
                "name": "045.InHisArms",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/045.InHisArms.mp3"
				},
				{
                "track": 44,
                "name": "044.Withyouronewildandpreciouslife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/044.Withyouronewildandpreciouslife.mp3"
				},
				{
                "track": 43,
                "name": "043.Tastealiquorneverbrewed",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/043.Tastealiquorneverbrewed.mp3"
				},
				{
                "track": 42,
                "name": "042.Donotquit",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/042.Donotquit.mp3"
				},
				{
                "track": 41,
                "name": "041.SheWalksinBeauty",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/041.SheWalksinBeauty.mp3"
				},
				{
                "track": 40,
                "name": "040.AThousandMoons",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/040.AThousandMoons.mp3"
				},
				{
                "track": 39,
                "name": "039.MayWeMeetAgain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/039.MayWeMeetAgain.mp3"
				},
				{
                "track": 38,
                "name": "038.Atnightthedead",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/038.Atnightthedead.mp3"
				},
				{
                "track": 37,
                "name": "037.Thefirestheykept",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/037.Thefirestheykept.mp3"
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