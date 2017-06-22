function start()
{
   var now = document.getElementById("now");
   var time = new Date();
   now.innerHTML = time.toLocaleString();
}
