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
                "track": 917,
                "name": "周蕙-约定",
                "length": "4:46",
                "file": "精选/周蕙-约定.mp3"
				},
				{
                "track": 916,
                "name": "周蕙-相遇太早",
                "length": "4:46",
                "file": "精选/周蕙-相遇太早.mp3"
				},
				{
                "track": 915,
                "name": "周蕙-我看",
                "length": "4:46",
                "file": "精选/周蕙-我看.mp3"
				},
				{
                "track": 914,
                "name": "周蕙-没有你",
                "length": "4:46",
                "file": "精选/周蕙-没有你.mp3"
				},
				{
                "track": 913,
                "name": "周蕙-好想好好爱你",
                "length": "4:46",
                "file": "精选/周蕙-好想好好爱你.mp3"
				},
				{
                "track": 912,
                "name": "周蕙-风铃",
                "length": "4:46",
                "file": "精选/周蕙-风铃.mp3"
				},
				{
                "track": 911,
                "name": "周蕙-不想让你知道",
                "length": "4:46",
                "file": "精选/周蕙-不想让你知道.mp3"
				},
				{
                "track": 910,
                "name": "周华健-朋友",
                "length": "4:46",
                "file": "精选/周华健-朋友.mp3"
				},
				{
                "track": 909,
                "name": "周华健-难念的经",
                "length": "4:46",
                "file": "精选/周华健-难念的经.mp3"
				},
				{
                "track": 908,
                "name": "周华健-覆水难收",
                "length": "4:46",
                "file": "精选/周华健-覆水难收.mp3"
				},
				{
                "track": 907,
                "name": "周华健-风雨无阻",
                "length": "4:46",
                "file": "精选/周华健-风雨无阻.mp3"
				},
				{
                "track": 906,
                "name": "周华健-刀剑如梦",
                "length": "4:46",
                "file": "精选/周华健-刀剑如梦.mp3"
				},
				{
                "track": 905,
                "name": "周华健、齐豫-天下有情人",
                "length": "4:46",
                "file": "精选/周华健、齐豫-天下有情人.mp3"
				},
				{
                "track": 904,
                "name": "周华健、齐豫-神话情话",
                "length": "4:46",
                "file": "精选/周华健、齐豫-神话情话.mp3"
				},
				{
                "track": 903,
                "name": "周传雄-我的心太乱",
                "length": "4:46",
                "file": "精选/周传雄-我的心太乱.mp3"
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