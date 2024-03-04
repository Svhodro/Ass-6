
let searchValue = document.querySelector("#input-value")
let searchBtn = document.querySelector("#Search")
let allSearch = document.querySelector(".add")
let mainCard = document.querySelector(".show")


async function datafatch(all, valu) {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?${all + valu}`);
    const data = await res.json();
    allSearch.textContent = "";
    data.posts.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
<div class="cerd flex gap-8 bg-slate-200 h-72 rounded-lg p-4">
<div class="avtar ">
  <div class="avatar w-20">

    <div class="w-24 rounded-xl">
      <img src="${item.image}" />
    </div>
    <div class="badge badge-success badge-sm ${item.isActive ? 'bg-green-500' : 'bg-red-500'} absolute right-[-5px] top-[-5px]"></div>
  </div>
</div>
<div class="Contents flex flex-col gap-6">
  <div class="headers flex gap-6 font-bold">
    <p># ${item.category}</p>
    <p>Author : ${item.author.name}</p>
  </div>
  <p class="font-bold text-xl">${item.title}</p>
  <p>It's one thing to subject yourself to ha Halloween costume mishap because, <br>
    hey that's your prerogative</p>
  <hr class="border-dashed bg-slate-500 ">
  <div class="flex  justify-between text-slate-500">
    <div class="flex gap-3">
      <p>
        <span> <i class="fa-regular fa-message"></i> </span>
        <span> ${item.comment_count}</span>
      </p>
      <p>
        <span> <i class="fa-regular fa-eye"></i></span>
        <span> ${item.view_count}</span>
      </p>
      <p>
        <span> <i class="fa-regular fa-clock"></i></span>
        <span>${item.posted_time}</span>
      </p>
    </div>
    <div>
      <button class="btn btn-circle btn-success tap">
        <i class="fa-solid fa-envelope-open "></i>
      </button>
    </div>



  </div>

</div>
</div>
`
        allSearch.appendChild(div)
    });
    // console.log(data)
    // element creation
}


const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    mainCard.innerHTML="";
    console.log(data)
    data.forEach(item => {  
             
        const div = document.createElement('div');
        div.innerHTML =`<div class="card w-96 bg-base-300 shadow-xl">
          <figure class="p-4"><img src="${item.cover_image}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-lg"><i class="fa-regular fa-calendar-check"></i> <span>${item.author.posted_date ? item.author.posted_date : 'No Publish date'}</span></h2>
            <p class="text-lg font-bold">${item.title}</p>
              <p>${item.description} </p>
            <div>
              <div class="flex m-3 gap-3">
                <div class="avatar">
                  <div class="w-16 rounded-full">
                    <img src="${item.profile_image}" />
                  </div>
                </div>

                <div class="content flex flex-col">
                  <p class="font-bold">${item.author.name}</p>
                  <p>${item.author.designation ? item.author.designation : 'Unknown'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`
        ;        
        mainCard.appendChild(div);

    });

};




datafatch()
latestPost()