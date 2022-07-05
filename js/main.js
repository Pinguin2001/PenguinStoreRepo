function href(url) {
    window.location.href = url;
}
function checkVersion(versionString) {
  return decodeURI((new RegExp('[?]' + versionString + '=' + '([^&]+?)($)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}