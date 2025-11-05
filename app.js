let input1 = document.querySelector("#inputfield");
const ol = document.querySelector("ol");
const completelist = [];

function todo(){
    ol.innerHTML = "";
    for(let i =0; i < completelist.length; i++){
        ol.innerHTML  += `<li class="flex justify-between items-center bg-gray-100 py-3 px-4 mt-3 rounded-xl">${completelist[i]}

        <button onclick= "editit(${i})" class="text-sm rounded-full p-2 w-20 bg-yellow-400 hover:bg-yellow-500 transition">Edit </button> 

        <button onclick= "deleteit(${i})" class="text-sm rounded-full p-2 w-20 bg-red-500 text-white hover:bg-red-600 transition">Delete</button>
        </li>`;
        
    }
}
function addtolist(){
     let task = input1.value.trim(); 

    if(task === ""){
        alert("Please enter something!");
        return;
    }
    completelist.push(input1.value);
    todo();
    input1.value = "";
}

function editit(index){
    let changevalue = prompt("Edit your value;");
    completelist.splice(index, 1 , changevalue);
    todo();
}

function deleteit(index){
    completelist.splice(index,1)
    todo();
}