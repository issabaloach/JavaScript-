
var list = document.getElementById('list');

var arts = [
        {   
            name: "arts",
            description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
            image: src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
    },
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/542556/pexels-photo-542556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    },
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    ,
    {   
        name: "Chevrolet Corvette",
        description: " Chevrolet Corvette extends the legendary legacy of the original, high-value everyday sports car. Blistering acceleration, death-grip handling and a civilized, comfortable ride continue to make the Corvette an icon.",
        image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    }
    
    ]

arts.forEach(function (data, ind) {
    var arts_Elee = `<div class="lg:w-1/3 sm:w-1/2 p-4 rounded-full">
    <div class="flex relative">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
            src=${data.image}>
        <div
            class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.year}
            </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
            <p class="leading-relaxed">${data.description}</p>
            <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="edit(this)">Edit</button>
            <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
        </div>
    </div>
</div>`;

    list.innerHTML += arts_Elee;
});

function remove(index) {
    arts.splice(index, 1);
    list.innerHTML = '';
    arts.forEach(function (data, ind) {
        var arts_Elee = `<div class="lg:w-1/3 sm:w-1/2 p-4  rounded-full">
        <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                src="${data.image}">
            <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.year}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
                <p class="leading-relaxed">${data.description}</p>
                <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
                <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="edit(this)">Edit</button>
            </div>
        </div>
    </div>`;

        list.innerHTML += arts_Elee;
    });
};

function edit(arts_Elee) {
    var data = arts_Elee.parentElement.id
    arts[index].description = prompt("Make Changes in DESC")
    arts.innerHTML = "";
    console.log(data);

    arts.forEach(function (data, ind) {
        var arts_Elee = `<div class="lg:w-1/3 sm:w-1/2 p-4  rounded-full">
        <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                src="${data.image}">
            <div
                class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${data.year}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${data.name}</h1>
                <p class="leading-relaxed">${data.description}</p>
                <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="remove(this)">Delete</button>
                <button class="border-2 rounded-md px-4 py-2 mt-3" onclick="edit(this)">Edit</button>
            </div>
        </div>
    </div>`;

        list.innerHTML += arts_Elee;
    });

};