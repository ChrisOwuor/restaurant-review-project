//queries
const username = document.querySelector("#firstname");
const usernames = document.querySelector("#lastname");
const useremail = document.querySelector("#email")
const main = document.querySelector('.main')
// const profilepic = document.querySelector('#profilepic').file

//funtion to randomly generate number s used for ids
function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}
//function to display time
function displayTime() {
  let date = new Date();
  let ctime = date.toLocaleTimeString();
 return ctime
}
//function to clear local storage
function del()
{
  localStorage.removeItem('details')
}

//user constructor
function userDataset (fname, sname, email, id,time) {
  this.fname = fname;
  this.sname = sname;
  this.email = email;
  this.id = id;
  this.time = time;
}

  let dataArray = [];



//use button to display content
document.addEventListener("DOMContentLoaded", () => {
document.querySelector("#btns").addEventListener("submit", (e) => {
  e.preventDefault();
  const myobj = new userDataset(
    username.value,
    usernames.value,
    useremail.value,
    getRandomInt(1000000000),
    displayTime()
  );
  //store the details in local storage
  //to store any data in local storaege we need to convert it to string first

  dataArray.push(myobj);
  setlocalStorage(dataArray); // callng the setlocalstorage after the items is pushed in array
getlocalstorage(dataArray);

});

getlocalstorage(dataArray);
  }
)


//function to get local storage
const getlocalstorage = function () {
  let dataArray = JSON.parse(localStorage.getItem("details"));
  getList(dataArray)
}
//function to set local storage
function setlocalStorage(toDoItems) {
  localStorage.setItem("details", JSON.stringify(toDoItems));
}
//function to get items from localstorage
const getList = function (dataArrays) {
  const testDiv = document.querySelector('.testdiv')
  testDiv.innerHTML= ""
  dataArrays.forEach((item) => {
    let itemTag = `
    <div class="blogs-item">
      <div class="blog-image">
        <div class="slider">
          <a class="slidess" href="#slide-1">1</a>
          <a class="slidess" href="#slide-2">2</a>
          <a class="slidess" href="#slide-3">3</a>
          <a class="slidess" href="#slide-4">4</a>
          <a class="slidess" href="#slide-5">5</a>

          <div class="slides">
            <div  id="slide-1">1</div>
            <div  id="slide-2">2</div>
            <div  id="slide-3">3</div>
            <div  id="slide-4">4</div>
            <div  id="slide-5">5</div>
          </div>
        </div>
      </div>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        suscipit fugiat ducimus sint expedita ratione temporibus. Neque,
        voluptatum?<span><a href="#">Read more...</a></span>
      </p>

      <div class="content">
        <div class="about-author">
          <div class="author-image">
            <img src="images/pexels-abet-llacer-3025236.jpg" alt="author" />

          </div><div>
    <p>By - <span>${item.fname}</span></p>
          <p>${item.time}</p>
        </div>
      </div>
    </div>
    </div>`;
    testDiv.insertAdjacentHTML('beforeend',itemTag)
  });
}
//paragraph content


//function to deletediv

