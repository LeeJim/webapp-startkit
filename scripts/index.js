
$(function() {
  var $modal = $('.modal')
  var $modalImg = $modal.find('img')

  $('.list').on('click', '.item', function (e) {
    var img = $(e.currentTarget).data('img')
    
    $modal.addClass('is-active')
    $modalImg.attr('src', img)
  })

  $modal.find('.modal-close').on('click', function() {
    $modal.removeClass('is-active')
    $modalImg.attr('src', '')
  })
})