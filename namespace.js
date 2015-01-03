Namespace = function(scope, definition) {
  var item, root;
  root = typeof GLOBAL !== "undefined" ? GLOBAL : window;
  scope = scope.split('.');
  for (var i = 0; i < scope.length; ++i) {
    item = scope[i];
    if (root[item] == null) {
      root[item] = {};
    }
    root = root[item];
  }
  switch (typeof definition) {
    case 'function':
      definition.apply(root);
      break;
    case 'object':
      _.extend(root, definition);
  }
  return root;
};