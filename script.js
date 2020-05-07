// Get element by ID
const bundle = document.getElementById('bundle');
const myButton = document.getElementById('addButton');
const mylist = document.getElementById('list');

const ourData = ['bundleId1', 'bundleid2','bundle3', 'bundle4', 'bundlename'];



// Loop through the data and get it visible on the DOM 

ourData.forEach(elem => {
  const option = document.createElement('option');
  option.innerHTML = elem;
  bundle.appendChild(option)
});


myButton.addEventListener('click', () => {
    // Find what's selected on #bundle

    //TODO: Check that the selected element is already on the list, if so do not add again
    let selected = bundle.options[bundle.selectedIndex].text;
    let added = document.createElement('li');
    //TODO: Also add a button to the li
    
    added.innerHTML = selected; //add it to the DOM 
    mylist.appendChild(added); //makes it visible on the DOM 

}); 
//  bundle4                                                    x//addEventListener 

// NEXT SESSION 
// Create a new button for each item in the list
// That when clicked you remove it from the list
// You will want to use an eventListener to do this
// You may also need some id  for each li

// Get the object we have clicked on
