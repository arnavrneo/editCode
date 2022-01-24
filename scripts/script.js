const themes = ['ayu-dark', 'ayu-mirage', 'base16-dark', 'blackboard', 'cobalt', 'erlang-dark',
                'monokai', 'night', 'solarized-dark', 'yonce', '3024-night', 'blackboard', 'the-matrix']
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function theme() { 
  value = themes[Math.floor(Math.random() * 13)];
  update();
}

let editor;
function update() {
  var select = $("#lang").val();
  editor =
    editor ??
    CodeMirror.fromTextArea(document.getElementById("text"), {
      mode: select,
      theme: 'blackboard',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      gutters: ["CodeMirror-linenumbers", "breakpoints"],
    });
  editor.setOption("mode", select);
  editor.setOption("theme", value);
}
update();



// let editor;
// function update() {
//   var select = $("#lang").val();
//   var value = $("#theme").val();
//   console.log(value);
//   editor =
//     editor ??
//     CodeMirror.fromTextArea(document.getElementById("text"), {
//       lineNumbers: true,
//       lineWrapping: true,
//       autofocus: true,
//     });
//   editor.setOption("mode", select);
//   editor.setOption("theme", value);
// }
// update();