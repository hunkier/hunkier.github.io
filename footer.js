
var href = window.location.href;
var icp_container = document.getElementById('icp_container');
var content='<a href="http://www.beian.gov.cn" target="_blank">赣ICP备20001211号-1</a>';
var site='hunkier.cn';
// site = 'localhost';
if (href.indexOf(site) >-1){
  icp_container.innerHTML=content;
}
