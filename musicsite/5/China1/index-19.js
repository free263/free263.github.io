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
                "track": 842,
                "name": "张信哲-直觉",
                "length": "4:46",
                "file": "精选/张信哲-直觉.mp3"
				},
				{
                "track": 841,
                "name": "张信哲-用情",
                "length": "4:46",
                "file": "精选/张信哲-用情.mp3"
				},
				{
                "track": 840,
                "name": "张信哲-信仰",
                "length": "4:46",
                "file": "精选/张信哲-信仰.mp3"
				},
				{
                "track": 839,
                "name": "张信哲-太想爱你",
                "length": "4:46",
                "file": "精选/张信哲-太想爱你.mp3"
				},
				{
                "track": 838,
                "name": "张信哲-难以抗拒你容颜",
                "length": "4:46",
                "file": "精选/张信哲-难以抗拒你容颜.mp3"
				},
				{
                "track": 837,
                "name": "张信哲-某某某",
                "length": "4:46",
                "file": "精选/张信哲-某某某.mp3"
				},
				{
                "track": 836,
                "name": "张信哲-宽容",
                "length": "4:46",
                "file": "精选/张信哲-宽容.mp3"
				},
				{
                "track": 835,
                "name": "张信哲-过火",
                "length": "4:46",
                "file": "精选/张信哲-过火.mp3"
				},
				{
                "track": 834,
                "name": "张信哲-从开始到现在",
                "length": "4:46",
                "file": "精选/张信哲-从开始到现在.mp3"
				},
				{
                "track": 833,
                "name": "张信哲-不要对他说",
                "length": "4:46",
                "file": "精选/张信哲-不要对他说.mp3"
				},
				{
                "track": 832,
                "name": "张信哲-别怕我伤心",
                "length": "4:46",
                "file": "精选/张信哲-别怕我伤心.mp3"
				},
				{
                "track": 831,
                "name": "张信哲-爱如潮水",
                "length": "4:46",
                "file": "精选/张信哲-爱如潮水.mp3"
				},
				{
                "track": 830,
                "name": "张信哲-爱就一个字",
                "length": "4:46",
                "file": "精选/张信哲-爱就一个字.mp3"
				},
				{
                "track": 829,
                "name": "张信哲-爱不留",
                "length": "4:46",
                "file": "精选/张信哲-爱不留.mp3"
				},
				{
                "track": 828,
                "name": "张信哲、薛之谦-你不是一个人",
                "length": "4:46",
                "file": "精选/张信哲、薛之谦-你不是一个人.mp3"
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