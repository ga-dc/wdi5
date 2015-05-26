function initIsotope() {
  var $grid = $('.paintings').isotope({
    // options
    itemSelector: '.painting',
    layoutMode: 'fitRows'
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  var $filters = $('.filter-nav a');
  $filters.click(function(event){
    event.preventDefault();
    var filterBy = $(event.target).data("filterby");
    $grid.isotope({ filter: filterBy});
  });
}
