  Amplitude.init({
    "songs": [
      {
        "name": "Xmas Poem",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/01 Xmas Poem.mp3"
      },
      {
        "name": "Trépak",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/02 Trepak.m4a"
      },
      {
        "name": "Jingle Bells",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/03 Jingle Bells.m4a"
      },
      {
        "name": "O Come All Ye Faithful",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/04 O Come All Ye Faithful.m4a"
      },
      {
        "name": "We Built This City.m4a",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/05 We Built This City.m4a"
      },
      {
        "name": "Thriller",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/06 Thriller.m4a"
      },
      {
        "name": "Nutcracker March",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/07 Nutcracker March.m4a"
      },
      {
        "name": "Deck The Halls",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/08 Deck The Halls.m4a"
      },
      {
        "name": "The Hippo's Dance With The Walrus.m4a",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/09 The Hippo's Dance With The Walrus.m4a"
      },
      {
        "name": "Oh! Dem' Golden Slippers.m4a",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/10 Oh! Dem Golden Slippers.m4a"
      },
      {
        "name": "Always Be My Baby.m4a",
        "album": "Boning Around The Christmas Tree",
        "url": "audio/11 Always Be My Baby.m4a"
      },

    ],
    "default_album_art": "img/album.png",
    autoplay: true
  });

  var expanded = false;
  var playlistEpxanded = true;
  /*
    jQuery Visual Helpers
  */
  $('#small-player').hover(function(){
    $('#small-player-middle-controls').show();
    $('#small-player-middle-meta').hide();
  }, function(){
    $('#small-player-middle-controls').hide();
    $('#small-player-middle-meta').show();

  });

  $('#top-large-album').hover(function(){
    $('#top-header').show();
    $('#small-player').show();
  }, function(){
    if( !$('#top-header').is(':hover') && !$('#small-player').is(':hover') ){
      $('#top-header').fadeOut(1000);
      $('#small-player').fadeOut(1000);
    }
  });

  $('#top-header').hover(function(){
    $('#top-header').show();
    $('#small-player').show();
  }, function(){

  });

  /*
    Toggles Album Art
  */
  $('#small-player-toggle').click(function(){
    $('.hidden-on-collapse').show();
    $('.hidden-on-expanded').hide();

    $('#slide4').animate({
        height: "+600px"
    });
    /*
      Is expanded
    */
    expanded = true;

    $('#small-player').css('border-top-left-radius', '0px');
    $('#small-player').css('border-top-right-radius', '0px');
  });

  $('#top-header-toggle').click(function(){
    $('.hidden-on-collapse').hide();
    $('.hidden-on-expanded').show();
    $('#slide4').animate({
       height: "300px"
    });
    /*
      Is collapsed
    */
    expanded = false;

    $('#small-player').css('border-top-left-radius', '5px');
    $('#small-player').css('border-top-right-radius', '5px');
  });

  $('.playlist-toggle').click(function(){
    if( playlistEpxanded ){
      $('#small-player-playlist').hide();

      $('#small-player').css('border-bottom-left-radius', '5px');
      $('#small-player').css('border-bottom-right-radius', '5px');

      $('#large-album-art').css('border-bottom-left-radius', '5px');
      $('#large-album-art').css('border-bottom-right-radius', '5px');

      playlistEpxanded = false;
    }else{
      $('#small-player-playlist').show();

      $('#small-player').css('border-bottom-left-radius', '0px');
      $('#small-player').css('border-bottom-right-radius', '0px');

      $('#large-album-art').css('border-bottom-left-radius', '0px');
      $('#large-album-art').css('border-bottom-right-radius', '0px');

      playlistEpxanded = true;
    }
  });


  var random = Math.floor(Math.random() * (8)) + 1;

  $('#random_image').html('<a href="audio/Boning Around The Christmas Tree.zip"><img class="img-responsive" src="img/trombone' + random + '.jpg"></a>');

