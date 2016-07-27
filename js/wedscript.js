//It works! Cheap thrill. The slides move every 8 seconds. I increased it and adjusted the fadeIn timings. It takes time
//to scroll down to see the image. I am sure a shorter function with a math equation to calculate the fadeIn can be written and include a loop. 


  $(document).ready(function() {
    $('#lovecap').fadeIn(6000); 
    $('#lovecap').delay(1000);
    $('#lovecap').fadeOut(1000);
   
    $('#umbrella').fadeIn(18000); 
    $('#umbrella').delay(1000);
    $('#umbrella').fadeOut(1000);
    
   $('#lovehappy').fadeIn(34000); 
   $('#lovehappy').delay(1000);
   $('#lovehappy').fadeOut(1000);
    
   $('#bridelove').fadeIn(60000);
   $('#bridelove').delay(1000);
   $('#bridelove').fadeOut(1000);
    
  $('#lovewoods').fadeIn(80000); 
  $('#lovewoods').delay(1000);
  $('#lovewoods').fadeOut(1000);
    
    
});

var tableSelector = 'table';
var targetBreakpoint = 500;
var currentVisibleColumn = 1;
var nextButtonText = 'Compare Next';

// SETUP/SELECT REUSABLE ELEMENTS
var table = document.querySelector( tableSelector );
var allCells = table.querySelectorAll('th, td');
var columnHeaders = table.querySelectorAll('thead th:not(:empty)');
var rowHeaders = table.querySelectorAll('tbody th');
var nextButton = document.createElement('button');

function createButtons() {
  nextButton.textContent = nextButtonText;
  nextButton.style.display =  'none';

  table.parentNode.insertBefore(nextButton, table.nextSibling );
  
  nextButton.addEventListener('click', function(){
    currentVisibleColumn = currentVisibleColumn + 1 > columnHeaders.length ? 1 : currentVisibleColumn + 1;
    showCurrentlyVisible();
  });
}

function showCurrentlyVisible() {
    // Get the Items we're going to show. The :not(:empty) query here is because sometimes you have empty <th>s in <thead>
    var currentlyVisibleColHeader = document.querySelector('thead th:not(:empty):nth-of-type( '+ currentVisibleColumn +')');
    var currentlyVisibleCells = document.querySelectorAll('tbody td:nth-of-type(' +currentVisibleColumn+ ')');

    // Hide All The Cells
    for(var i=0;i<allCells.length;i++ ) { 
      allCells[i].style.display = 'none'; 
    }

    // Show Currently Visible Col Header
    currentlyVisibleColHeader.style.display = 'block';

    // Show Currently Visible Cells
    for( var i=0;i<currentlyVisibleCells.length;i++) {
      currentlyVisibleCells[i].style.display = 'block';
    }

    // Show Row Headers
    for( var i=0;i<rowHeaders.length;i++) {
      rowHeaders[i].style.display = 'block';
    }
}

function updateTable() {
  
  // Get the Table's Width. Might as well go FULL Container Query over here.
  var tableWidth = table.getBoundingClientRect().width;
  
  // If the table explodes off the viewport or is wider than the target breakpoint
  if ( tableWidth > window.innerWidth || tableWidth < targetBreakpoint ) {

    if(table.getAttribute('data-comparing') != 'active') {
      // Set the comparison state to "Active"
      table.setAttribute('data-comparing','active');

      // Show Next Button
      nextButton.style.display =  'block';
    
      // Show the currently visible column
      showCurrentlyVisible();

    }
  