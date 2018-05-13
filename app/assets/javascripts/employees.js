$(function () {

  $("#add_employee").on('ajax:success', function (data) {
    $('#add_employee')[0].reset()
  });

  Pusher.logToConsole = true;
  var pusher = new Pusher('API_KEY', {
    cluster: 'CLUSTER',
    encrypted: true
  });

  var channel = pusher.subscribe('employee');
  channel.bind('new', function (data) {
    updateTable(data)
  });
});

function updateTable(data) {
  $('#employee-table tbody').append(`
    <tr>
      <td>${data.name}</td>
      <td>${data.position}</td>
      <td>${data.office}</td>
      <td>${data.extension}</td>
      <td>${data.start_date}</td>
      <td><a href="/employees/${data.id}">Show</a></td>
      <td><a href="/employees/${data.id}/edit">Edit</a></td>
      <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/employees/${data.id}">Delete</a></td>
    </tr>
  `)
}
