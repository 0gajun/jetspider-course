function f() {
  var i = 1;
  var j = i++;
  p(i);
  p(j);
}
f();

x = 0;
y = x++;
p(x);
p(y);
