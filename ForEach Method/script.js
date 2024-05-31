
var lists = document.getElementById('list');

var arts = [
        {   
            name: "Arts Brushes",
            description: "Art brushes ready for making people mind blow ",
            image:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
    },
    {   
        name: "Art being ready",
        description: "someone making paint called art made by artist is being on",
        image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Glass full of Colors",
        description: "ready to make a unforgettable art with combination of colors.",
        image: "https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Human eye",
        description: " People always ready for beautiful things such as arts, pictures, for beatiful looks",
        image: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Wall of Arts",
        description: " arts are used to make our wall of home beautiful .",
        image: "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Merge of Arts",
        description: " iconic art made by someone specially for making someone feel better",
        image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Colors are life saver",
        description: " Colors in arts are life saver as colors are love .",
        image: "https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
    {   
        name: "City rotated",
        description: " ready to make a beautiful city make more beautiful by art",
        image: "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Merge of Arts",
        description: " iconic art made by someone specially for making someone feel better",
        image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    
    ]


    arts.forEach(function (data, ind) {
        var update = `<div class="lg:w-1/3 sm:w-1/2 p-4 id=${ind}"">
        <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                src=${data.image}>
            <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
                <p class="leading-relaxed">${data.description}</p>
                <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
                <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="edit(this)">Edit</button>
            </div>
        </div>
    </div>`;
    
        lists.innerHTML += update;
    });
    
    function remove(element) {
    
        arts.splice(element, 1);
    
        lists.innerHTML = '';
    
        arts.forEach(function (data, ind) {
            var update = `<div class="lg:w-1/3 sm:w-1/2 p-4 id=${ind}"">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                    src=${data.image}>
                <div
                    class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
                    <p class="leading-relaxed">${data.description}</p>
                    <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
                    <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="edit(this)">Edit</button>
                </div>
            </div>
        </div>`;
    
            lists.innerHTML += update;
        });
    
    };

    function edit(element) {
        var index = parseInt(element.parentNode.parentNode.ind);
        var newName = prompt("Enter the new name:");
        var newDescription = prompt("Enter the new description:");
        arts[index].name = newName;
        arts[index].description = newDescription;
        lists.innerHTML = "";
        arts.forEach(function(data, ind) {
            var update = `<div class="lg:w-1/3 sm:w-1/2 p-4 id="${ind}">
                <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                        src="${data.image}">
                    <div
                        class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
                        <p class="leading-relaxed">${data.description}</p>
                        <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
                        <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="edit(this)">Edit</button>
                    </div>
                </div>
            </div>`;
            lists.innerHTML += update;
        });
    }