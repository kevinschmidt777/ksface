// KSFace v1.0.0 - www.ksface.com
// Copyright (c) 2019 Kevin Schmidt Webentwicklung - www.kswebentwicklung.de

// Select parent from .ks-grid to apply overflow:hidden (hide overflowing grid div)
document.addEventListener('DOMContentLoaded', function(event) {
  const grids = document.getElementsByClassName('ks-grid');
  const gridParents = [];

  Array.prototype.forEach.call(grids, (grid) => {
    gridParents.push(grid.parentElement);
  });

  gridParents.forEach((parent) => {
    parent.style.overflow = 'hidden';
  });
});
