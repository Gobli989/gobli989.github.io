function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

function openurl(url) {
    window.open(url, '_blank');
}