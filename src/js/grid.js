// KSFace v0.1.0 - www.ksface.com
// Copyright (c) 2019 Kevin Schmidt Webentwicklung - www.kswebentwicklung.de

// Select parent from .ks-grid to apply overflow:hidden (hide overflowing grid div)
document.addEventListener('DOMContentLoaded', function(event) {
  const grids1 = document.getElementsByClassName('ks-grid');
  const grids2 = document.getElementsByClassName('ks-grid-minimal');
  const grids3 = document.getElementsByClassName('ks-grid-small');
  const grids4 = document.getElementsByClassName('ks-grid-medium');
  const grids5 = document.getElementsByClassName('ks-grid-large');
  const grids6 = document.getElementsByClassName('ks-grid-ultra');
  const grids = [];
  const gridParents = [];

  Array.prototype.forEach.call(grids1, (grid) => {
    grids.push(grid);
  });
  Array.prototype.forEach.call(grids2, (grid) => {
    grids.push(grid);
  });
  Array.prototype.forEach.call(grids3, (grid) => {
    grids.push(grid);
  });
  Array.prototype.forEach.call(grids4, (grid) => {
    grids.push(grid);
  });
  Array.prototype.forEach.call(grids5, (grid) => {
    grids.push(grid);
  });
  Array.prototype.forEach.call(grids6, (grid) => {
    grids.push(grid);
  });

  grids.forEach((grid) => {
    gridParents.push(grid.parentElement);
  });

  gridParents.forEach((parent) => {
    parent.style.overflow = 'hidden';
  });
});
