var index = 0;
var data= ["Web 3.0", "The Real Time Communication Services", "Web 3.0", "The Real Time Broadcasting Server", "Web 3.0", "The Real Time Communication Server", "Web 3.0", "No Downloads Required, No Personal Data Collected, No Sign-in Needed", "Web 3.0", "Compatible With Most Modern Browsers and Mobile Devices", "Web 3.0", "Video data is peer-to-peer, so unlike Zoom, your video data does not go thru the NSA's spying servers", "Web 3.0", "Low latency. I'm talking as low as 30-ms, and normally it never goes higher than 200-ms", "Web 3.0", "Video can be transferred over a LAN directly, so if using your phone as a webcam, you can crank the bitrates up to 40-mbps if you want, and your bandwidth won't be affected"];

var span= document.querySelector('span');
var section= document.querySelector('section');

function init() {
  let txt = document.createTextNode(data[index]);
  section.dataset.identity = data[index];
  span.innerText = txt.textContent;
  index++;
}

init();

setInterval(
  function(){
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
    index = index < data.length ?  index++ : 0 ;
  }
, 4501);
