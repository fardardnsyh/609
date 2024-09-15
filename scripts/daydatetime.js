function updateClock() {
  var now = new Date();
  var mo = now.getMonth(),
    dnum = now.getDate();

  var months = [
    "Janyary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var ids = ["month", "daynum"];
  var values = [months[mo], dnum];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
