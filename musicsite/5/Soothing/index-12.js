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
                "track": 891,
                "name": "834.DawnsLight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/834.DawnsLight.mp3"
				},
				{
                "track": 890,
                "name": "833.FromtheDay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/833.FromtheDay.mp3"
				},
				{
                "track": 889,
                "name": "832.mysticgrove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/832.mysticgrove.mp3"
				},
				{
                "track": 888,
                "name": "831.Lullaby",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/831.Lullaby.mp3"
				},
				{
                "track": 887,
                "name": "830.GentleWhisper",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/830.GentleWhisper.mp3"
				},
				{
                "track": 886,
                "name": "829.ThroughaArbor",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/829.ThroughaArbor.mp3"
				},
				{
                "track": 885,
                "name": "828.MauiWowee",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/828.MauiWowee.mp3"
				},
				{
                "track": 884,
                "name": "827.Spacerendezvous",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/827.Spacerendezvous.mp3"
				},
				{
                "track": 883,
                "name": "826.AngelsWings",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/826.AngelsWings.mp3"
				},
				{
                "track": 882,
                "name": "825.Jardin",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/825.Jardin.mp3"
				},
				{
                "track": 881,
                "name": "824.Untilthedayaftertomorrow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/824.Untilthedayaftertomorrow.mp3"
				},
				{
                "track": 880,
                "name": "823.Dsydreams",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/823.Dsydreams.mp3"
				},
				{
                "track": 879,
                "name": "822.OutoftheDarkness",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/822.OutoftheDarkness.mp3"
				},
				{
                "track": 878,
                "name": "821.KidsatPlay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/821.KidsatPlay.mp3"
				},
				{
                "track": 877,
                "name": "820.OurJourney",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/820.OurJourney.mp3"
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