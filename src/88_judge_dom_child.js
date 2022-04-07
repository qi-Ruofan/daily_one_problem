function isContain(a, b) {
  // TODO
  // 方法1
  return a.contains(b);

  // 方法二
  // const p = b.closest('.a');
  // if(p != null && p.isEqualNode(a)) {
  //   return true
  // }
  // return false;
}

const html = `
<div id="dom-001">
  <div id="dom-002"></div>
  <div id="dom-003">
    <div id="dom-004"></div>
  </div>
</div>
`
document.querySelector('body').innerHTML = html;
console.log(isContain(
  document.querySelector('#dom-001'),
  document.querySelector('#dom-002')
)) // true
console.log(isContain(
  document.querySelector('#dom-002'),
  document.querySelector('#dom-003')
)) // fasle