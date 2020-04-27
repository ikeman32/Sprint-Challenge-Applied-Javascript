// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create elements
    const
        newHeader = document.createElement('div'),
        newDate = document.createElement('span'),
        newH1 = document.createElement('h1'),
        newTemp = document.createElement('span');

    //Structuring
    newHeader.appendChild(newDate);
    newHeader.appendChild(newH1);
    newHeader.appendChild(newTemp);

    //Create classes

    newHeader.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');

    newDate.textContent = 'October 4, 2019';
    newH1.textContent = 'Lambda Times';
    newTemp.textContent = '98 Degrees';

    return newHeader;
}

document.querySelector('.header-container').appendChild(Header());