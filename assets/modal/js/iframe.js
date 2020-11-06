var $iframes = $( "iframe" );

$iframes.each(function () {
  $( this ).data( "ratio", this.height / this.width )
    .removeAttr( "width" )
    .removeAttr( "height" );
});

$( window ).resize( function () {
  $iframes.each( function() {

    var width = $( this ).parent().width();
    $( this ).width( width )
      .height( width * $( this ).data( "ratio" ) );
  });

}).resize();
