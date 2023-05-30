// say.jsと同じ処理結果になる
// 関数は、関数を引数として渡す際、その場で定義しても良い
function execute(someFunction, value) {
    someFunction(value);
  }
  
  execute(function(word){ console.log(word) }, "Hello");