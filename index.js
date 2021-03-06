var ICVL = require("iconv-lite");

module.exports = function encodeURIComponent_GBK(str) {
  if (str == null || typeof str == "undefined" || str == "") return "";

  var a = str.toString().split("");

  for (var i = 0; i < a.length; i++) {
    var ai = a[i];
    if (
      (ai >= "0" && ai <= "9") ||
      (ai >= "A" && ai <= "Z") ||
      (ai >= "a" && ai <= "z") ||
      ai === "." ||
      ai === "-" ||
      ai === "_"
    )
      continue;
    var b = ICVL.encode(ai, "gbk");
    var e = [""]; // 注意先放个空字符串，最保证前面有一个%
    for (var j = 0; j < b.length; j++)
      e.push(b.toString("hex", j, j + 1).toUpperCase());
    a[i] = e.join("%");
  }
  return a.join("");
};
