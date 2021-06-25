const heading = document.createElement('h2');
document.body.appendChild(heading);
heading.innerHTML = `CatPhotoApp`;

const para1 = document.createElement('p');
document.body.appendChild(para1);
para1.innerHTML = `Click here to view more` + ' ';

const anchor = document.createElement('a');
anchor.innerHTML = `cat photos.`;
anchor.setAttribute('href','https://www.google.com/');
para1.appendChild(anchor);

const para2 = document.createElement('p');
document.body.appendChild(para2);
para2.innerHTML = `Things cats love:` ;

const uList = document.createElement('ul');
document.body.appendChild(uList);

const ulLi = `
    <li> cat nip </li>
    <li> laser pointer </li>
    <li> lasagna </li>
`;

uList.innerHTML = ulLi;

const para3 = document.createElement('p');
document.body.appendChild(para3);
para3.innerHTML = `Top 3 things cats hate:` ;

const oList = document.createElement('ol');
document.body.appendChild(oList);

const olLi = `
    <li> flea treatment </li>
    <li> thunder </li>
    <li> other cats </li>
`;

oList.innerHTML = olLi;


