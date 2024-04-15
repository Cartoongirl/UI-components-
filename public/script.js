'use strict';

const infos = [
    {
        id: "personal",
        name: 'Personal',
        content: 'Personal Content'
    },

    {
        id: "education",
        name: 'Education',
        content: 'Education Content'
    },
    
    {
        id: "employment",
        name: 'Employment',
        content: 'Employment Content'
    }
]


const personal = document.querySelector('#personal');
const education = document.querySelector('#education');
const employment = document.querySelector('#employment');
const personalContent = document.querySelector('#personal-content');
let contentDiv = document.getElementById('content-div');
let links = document.querySelectorAll('#links li');

console.log(links);

for (let link of links) {
    link.addEventListener('click', function(e){
    
        for(let i = 0; i < infos.length; i++) {
            if(infos[i].id === link.id) {
                
        let elem = `
                    <div id="personal-content" class="bg-white mt-8 p-8">
                        <label class="text-gray-600 font-semibold">${infos[i].name}</label> <br>
                        <input class=" rounded-md border border-gray-300 p-2" type="text"placeholder="${infos[i].content}"></input>
                    </div>
                `
        contentDiv.innerHTML = elem;
        }
        }
    })
}














































// personal.addEventListener('click', personalInfo); 
// education.addEventListener('click', educationInfo);    
// employment.addEventListener('click', employmentInfo); 

// function personalInfo() {

//     let elem = `
//     <div id="personal-content" class="bg-white mt-8 p-8">
//         <label class="text-gray-600 font-semibold">Name</label> <br>
//         <input class=" rounded-md border border-gray-300 p-2" type="text"placeholder="Enter full name"></input>
//     </div>
// `

// contentDiv.innerHTML = elem;
// }

// function educationInfo() {

//     let elem = `
//     <div id="personal-content" class="bg-white mt-8 p-8">
//         <label class="text-gray-600 font-semibold">Name of School</label> <br>
//         <input class=" rounded-md border border-gray-300 p-2" type="text"placeholder="Enter school name"></input>
//     </div>
// `
// contentDiv.innerHTML = elem;
// }

// function employmentInfo() {

//     let elem = `
//     <div id="personal-content" class="bg-white mt-8 p-8">
//         <label class="text-gray-600 font-semibold">Name of Employer</label> <br>
//         <input class=" rounded-md border border-gray-300 p-2" type="text"placeholder="Enter employer name"></input>
//     </div>
// `
// contentDiv.innerHTML = elem;
// }


