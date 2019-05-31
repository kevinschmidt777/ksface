// KSFace - www.ksface.com
// Copyright (c) 2019 Kevin Schmidt Webentwicklung - www.kswebentwicklung.de

const allTables = document.querySelectorAll('table');
allTables.forEach((table) => {
  const parent = table.parentNode;
  const wrapper = document.createElement('div');
  wrapper.style.overflowX="auto";
  wrapper.appendChild(table);
  parent.appendChild(wrapper);
});