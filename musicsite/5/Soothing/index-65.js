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
                "track": 96,
                "name": "096.Illmeetyouthere",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/096.Illmeetyouthere.mp3"
				},
				{
                "track": 95,
                "name": "095.Andyourveryfleshshallbeagreatpoem",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/095.Andyourveryfleshshallbeagreatpoem.mp3"
				},
				{
                "track": 94,
                "name": "094.Ifyoucannotbeapoetbethepoem",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/094.Ifyoucannotbeapoetbethepoem.mp3"
				},
				{
                "track": 93,
                "name": "093.DreaminaNightmare",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/093.DreaminaNightmare.mp3"
				},
				{
                "track": 92,
                "name": "092.Whilehewasaway",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/092.Whilehewasaway.mp3"
				},
				{
                "track": 91,
                "name": "091.Itsalwaystoolatetoday",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/091.Itsalwaystoolatetoday.mp3"
				},
				{
                "track": 90,
                "name": "090.Helicalsymmetry",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/090.Helicalsymmetry.mp3"
				},
				{
                "track": 89,
                "name": "089.Youaresafehere",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/089.Youaresafehere.mp3"
				},
				{
                "track": 88,
                "name": "088.Writehardandclearaboutwhathurts",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/088.Writehardandclearaboutwhathurts.mp3"
				},
				{
                "track": 87,
                "name": "087.Timeistheechoofanaxewithinawood",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/087.Timeistheechoofanaxewithinawood.mp3"
				},
				{
                "track": 86,
                "name": "086.Thetruthwillsetyoufree",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/086.Thetruthwillsetyoufree.mp3"
				},
				{
                "track": 85,
                "name": "085.SOMEWHEREWAITING",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/085.SOMEWHEREWAITING.mp3"
				},
				{
                "track": 84,
                "name": "084.HopeistheThingwithFeathers",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/084.HopeistheThingwithFeathers.mp3"
				},
				{
                "track": 83,
                "name": "083.Allthatweseeorseemisbutadreamwithinadream",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/083.Allthatweseeorseemisbutadreamwithinadream.mp3"
				},
				{
                "track": 82,
                "name": "082.WhatLiesAhead",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/082.WhatLiesAhead.mp3"
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