// $(document).ready(function () {
//   // Initialize jQuery Mobile
//   $(document).on("mobileinit", function () {
//     $.extend($.mobile, {
//       allowCrossDomainPages: true,
//     });
//   });
// });

// Add an event listener for the form submission
$("#submit-button").on("click", function () {
  // Get the form data and create a new order object
  console.log("rertertertertertertre");
  var order = {
    id: Math.random().toString(16).slice(2),
    name: $("#name").val(),
    email: $("#email").val(),
    // phone: $("#phone").val(),
    food: $("#food").val(),
  };

  // Create an array to store the orders
  var orders = [];

  // Add the order to the array
  orders.push(order);

  // store the array in local storage
  localStorage.setItem("orders", JSON.stringify(orders));
  $("#name").val("");
  $("#food").val("");
  $("#email").val("");
  alert("Data saved successfully!");
  $.mobile.changePage("#display-page");
});

// Add an event listener for the display page
$(document).on("pagebeforeshow", "#display-page", function () {
  // Get the orders from local storage
  var orders = JSON.parse(localStorage.getItem("orders"));

  // Check if there are any orders
  if (orders && orders.length > 0) {
    // Create a list of orders
    var orderList = $("<ul>");

    // Loop through the orders and create list items
    for (var i = 0; i < orders.length; i++) {
      var order = orders[i];
      var listItem = $("<li>").html(
        "<strong>Name:</strong> " +
          order.name +
          "<br><strong>Email:</strong> " +
          order.email +
          "<br><strong>Phone:</strong> " +
          order.phone +
          "<br><strong>Food:</strong> " +
          order.food
      );
      orderList.append(listItem);
    }

    // Add the list to the display page
    $("#order-list").html(orderList).trigger("create");
  }
});
