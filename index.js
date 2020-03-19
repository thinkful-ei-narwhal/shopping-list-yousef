'use strict'

function shoppingList () {
  const list = $('.shopping-list')

  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault()
  })
  $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  })
  $('.shopping-list').on('click', '.shopping-item-delete', function (e) {
    $(this).closest('li').remove()
  })
  
}

// const item = $(event.currentTarget).find('input').attr('src')

$(shoppingList)
