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
                "track": 93,
                "name": "WhitneyHouston-IWillAlwaysLoveYou",
                "length": "4:46",
                "file": "欧美音乐/WhitneyHouston-IWillAlwaysLoveYou.mp3"
				},
				{
                "track": 92,
                "name": "WhitneyHouston-IHaveNothing",
                "length": "4:46",
                "file": "欧美音乐/WhitneyHouston-IHaveNothing.mp3"
				},
				{
                "track": 91,
                "name": "WhitneyHouston-CallYouTonight",
                "length": "4:46",
                "file": "欧美音乐/WhitneyHouston-CallYouTonight.mp3"
				},
				{
                "track": 90,
                "name": "WestlifeMy Love",
                "length": "4:46",
                "file": "欧美音乐/WestlifeMy Love.mp3"
				},
				{
                "track": 89,
                "name": "Vicetone、Meron RyanWalk Thru Fire",
                "length": "4:46",
                "file": "欧美音乐/Vicetone、Meron RyanWalk Thru Fire.mp3"
				},
				{
                "track": 88,
                "name": "TrademarkOnly Love",
                "length": "4:46",
                "file": "欧美音乐/TrademarkOnly Love.mp3"
				},
				{
                "track": 87,
                "name": "Taylor SwiftLove Story",
                "length": "4:46",
                "file": "欧美音乐/Taylor SwiftLove Story.mp3"
				},
				{
                "track": 86,
                "name": "tatu-30_Minutes",
                "length": "4:46",
                "file": "欧美音乐/tatu-30_Minutes.mp3"
				},
				{
                "track": 85,
                "name": "Sting-ShapeOfMyHeart ",
                "length": "4:46",
                "file": "欧美音乐/Sting-ShapeOfMyHeart .mp3"
				},
				{
                "track": 84,
                "name": "SiaUnstoppable",
                "length": "4:46",
                "file": "欧美音乐/SiaUnstoppable.mp3"
				},
				{
                "track": 83,
                "name": "SiaMove Your Body(Alan Walker Remix)",
                "length": "4:46",
                "file": "欧美音乐/SiaMove Your Body(Alan Walker Remix).mp3"
				},
				{
                "track": 82,
                "name": "ShakinStevens-BecauseILoveYou",
                "length": "4:46",
                "file": "欧美音乐/ShakinStevens-BecauseILoveYou.mp3"
				},
				{
                "track": 81,
                "name": "Savage GardenTruly Madly Deeply",
                "length": "4:46",
                "file": "欧美音乐/Savage GardenTruly Madly Deeply.mp3"
				},
				{
                "track": 80,
                "name": "Sasha Alex SloanDancing With Your Ghost",
                "length": "4:46",
                "file": "欧美音乐/Sasha Alex SloanDancing With Your Ghost.mp3"
				},
				{
                "track": 79,
                "name": "SarahCoonor-just one last dance",
                "length": "4:46",
                "file": "欧美音乐/SarahCoonor-just one last dance.mp3"
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