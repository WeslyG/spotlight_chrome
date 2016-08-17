
//запуск по нажатию (мышкой)
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('index.html' target="_blank", {
      'width': 650,
      'height' : 85,
      'resizable': false,
      'frame': 'none'
  });
});


//обработка хот кея! тут был заеб и настройки до сих пор не подгружаются дефолтные. 
// странно это все
chrome.commands.onCommand.addListener(
  function(command) {
  if (command == "toggle-pin") {
      chrome.app.window.create('index.html' target="_blank", {
      'width': 650,
      'height': 85,
      'frame': 'none' // самая полезная фича. отключает окно закрия 
      })
}});
