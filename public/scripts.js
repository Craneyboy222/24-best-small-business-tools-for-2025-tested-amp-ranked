/* JavaScript */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipElements = document.querySelectorAll('[data-toggle="tooltip"]');
    tooltipElements.forEach(function(element) {
      element.addEventListener('mouseover', function() {
        var tooltipText = element.getAttribute('data-title');
        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerHTML = tooltipText;
        document.body.appendChild(tooltip);
        tooltip.style.top = element.offsetTop + 'px';
        tooltip.style.left = element.offsetLeft + 'px';
      });
      element.addEventListener('mouseout', function() {
        var tooltip = document.querySelector('.tooltip');
        if (tooltip) {
          tooltip.remove();
        }
      });
    });
  });
})();
