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
                "track": 21,
                "name": "021.Holdourdestiny",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/021.Holdourdestiny.mp3"
				},
				{
                "track": 20,
                "name": "020.Lovebetterthanthehurts",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/020.Lovebetterthanthehurts.mp3"
				},
				{
                "track": 19,
                "name": "019.Seetherain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/019.Seetherain.mp3"
				},
				{
                "track": 18,
                "name": "018.Iceblueinsummer",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/018.Iceblueinsummer.mp3"
				},
				{
                "track": 17,
                "name": "017.Chrysalis",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/017.Chrysalis.mp3"
				},
				{
                "track": 16,
                "name": "016.Ceiling",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/016.Ceiling.mp3"
				},
				{
                "track": 15,
                "name": "015.Feastofflowers",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/015.Feastofflowers.mp3"
				},
				{
                "track": 14,
                "name": "014.AMomenttoThink",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/014.AMomenttoThink.mp3"
				},
				{
                "track": 13,
                "name": "013.MyGift",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/013.MyGift.mp3"
				},
				{
                "track": 12,
                "name": "012.Alone",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/012.Alone.mp3"
				},
				{
                "track": 11,
                "name": "011.SomethingHappening",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/011.SomethingHappening.mp3"
				},
				{
                "track": 10,
                "name": "010.Wehadawayofbeingquiettogether",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/010.Wehadawayofbeingquiettogether.mp3"
				},
				{
                "track": 9,
                "name": "009.Myheartonlyseesyoursoul",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/009.Myheartonlyseesyoursoul.mp3"
				},
				{
                "track": 8,
                "name": "008.TheShadowsYouLeft",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/008.TheShadowsYouLeft.mp3"
				},
				{
                "track": 7,
                "name": "007.WhereDoestheDarkLive",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/007.WhereDoestheDarkLive.mp3"
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