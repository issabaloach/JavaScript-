const users = [
    {
      name: 'John Doe',
      fatherName: 'Richard Doe',
      age: 16,
      rollNo: '101',
      class: '10th Grade',
    },
    {
      name: 'Jane Smith',
      fatherName: 'Robert Smith',
      age: 15,
      rollNo: '102',
      class: '9th Grade',
    },
    {
      name: 'Michael Johnson',
      fatherName: 'James Johnson',
      age: 17,
      rollNo: '103',
      class: '11th Grade',
    },
    {
      name: 'Emily Davis',
      fatherName: 'William Davis',
      age: 14,
      rollNo: '104',
      class: '8th Grade',
    },
    {
      name: 'Jessica Brown',
      fatherName: 'Charles Brown',
      age: 16,
      rollNo: '105',
      class: '10th Grade',
    },
    {
      name: 'Daniel Wilson',
      fatherName: 'Thomas Wilson',
      age: 15,
      rollNo: '106',
      class: '9th Grade',
    },
    {
      name: 'Sarah Taylor',
      fatherName: 'Andrew Taylor',
      age: 17,
      rollNo: '107',
      class: '11th Grade',
    },
    {
      name: 'David Lee',
      fatherName: 'George Lee',
      age: 14,
      rollNo: '108',
      class: '8th Grade',
    },
    {
      name: 'Laura Martin',
      fatherName: 'Paul Martin',
      age: 16,
      rollNo: '109',
      class: '10th Grade',
    },
    {
      name: 'Kevin White',
      fatherName: 'Mark White',
      age: 15,
      rollNo: '110',
      class: '9th Grade',
    },
    {
      name: 'Anna Harris',
      fatherName: 'Steven Harris',
      age: 17,
      rollNo: '111',
      class: '11th Grade',
    },
    {
      name: 'Brian Clark',
      fatherName: 'Edward Clark',
      age: 14,
      rollNo: '112',
      class: '8th Grade',
    },
    {
      name: 'Sophia Lewis',
      fatherName: 'Henry Lewis',
      age: 16,
      rollNo: '113',
      class: '10th Grade',
    },
    {
      name: 'Christopher Walker',
      fatherName: 'Frank Walker',
      age: 15,
      rollNo: '114',
      class: '9th Grade',
    },
    {
      name: 'Grace Hall',
      fatherName: 'Peter Hall',
      age: 17,
      rollNo: '115',
      class: '11th Grade',
    },
    {
      name: 'Justin Allen',
      fatherName: 'Patrick Allen',
      age: 14,
      rollNo: '116',
      class: '8th Grade',
    },
    {
      name: 'Olivia Young',
      fatherName: 'Bruce Young',
      age: 16,
      rollNo: '117',
      class: '10th Grade',
    },
    {
      name: 'Nathan Hernandez',
      fatherName: 'Larry Hernandez',
      age: 15,
      rollNo: '118',
      class: '9th Grade',
    },
    {
      name: 'Mia King',
      fatherName: 'Joe King',
      age: 17,
      rollNo: '119',
      class: '11th Grade',
    },
    {
      name: 'Ethan Wright',
      fatherName: 'Stanley Wright',
      age: 14,
      rollNo: '120',
      class: '8th Grade',
    },
    {
      name: 'Ava Lopez',
      fatherName: 'Timothy Lopez',
      age: 16,
      rollNo: '121',
      class: '10th Grade',
    },
    {
      name: 'Jacob Scott',
      fatherName: 'Chris Scott',
      age: 15,
      rollNo: '122',
      class: '9th Grade',
    },
    {
      name: 'Samantha Green',
      fatherName: 'Shawn Green',
      age: 17,
      rollNo: '123',
      class: '11th Grade',
    },
    {
      name: 'Andrew Adams',
      fatherName: 'Jason Adams',
      age: 14,
      rollNo: '124',
      class: '8th Grade',
    },
    {
      name: 'Ella Baker',
      fatherName: 'Ryan Baker',
      age: 16,
      rollNo: '125',
      class: '10th Grade',
    },
  ];

present_html = 0
absent_html = 0
leave_html = 0

var userTable = document.getElementById("userTable");
var userName = document.getElementById("userName");
var fatherName = document.getElementById("fatherName");
var rollno = document.getElementById("rollNo");
var age = document.getElementById("age");
var present_checkbox = document.getElementById("present")
var absent_checkbox = document.getElementById("absent")
var leave_checkbox = document.getElementById("leave")
var present_html = document.getElementById("present-box")
var absent_html = document.getElementById("absent-box")
var leave_html = document.getElementById("leave-box")

  function addData() {
    userTable.innerHTML = "";
    for (var i = 0; i < users.length; i++) {
      userTable.innerHTML += `
      <tr>
              <td>${i + 1}</td>
              <td>${users[i].name}</td>
              <td>${users[i].fatherName}</td>
              <td>${users[i].rollNo}</td>
              <td>${users[i].age}</td>
              <td onclick="likeUser(this)"><i class="fa-regular fa-heart"></i></td>
  
              <td><input type="radio" name="attendance_${i}" id="present_${i}" value="Present" onchange="updateAttendance(${i}, 'present')"> Present </td>
              <td><input type="radio" name="attendance_${i}" id="absent_${i}" value="Absent" onchange="updateAttendance(${i}, 'absent')"> Absent</td>
              <td><input type="radio" name="attendance_${i}" id="leave_${i}" value="Leave" onchange="updateAttendance(${i}, 'leave')"> Leave </td>
          </tr>
      `;
    }
  }
  function updateAttendance(index, status) {
    var user = users[index].name;
    switch (status) {
        case 'present':
            if (!present_html.innerHTML.includes(`${user} - Present`)) {
                present_html.innerHTML += `<div>${user} - Present</div>`;
                updateCount('present-box', 1);
                updateCount('absent-box', 0);
                updateCount('leave-box', 0);
            }
            absent_html.innerHTML = absent_html.innerHTML.replace(`<div>${user} - Absent</div>`, '');
            leave_html.innerHTML = leave_html.innerHTML.replace(`<div>${user} - Leave</div>`, '');
            updateCount('present-box', 0)
            updateCount('absent-box', -1)
            updateCount('leave-box', -1)
            break;
        case 'absent':
            if (!absent_html.innerHTML.includes(`${user} - Absent`)) {
                absent_html.innerHTML += `<div>${user} - Absent</div>`;
                updateCount('absent-box', 1);
                updateCount('present-box', 0);
                updateCount('leave-box', 0);
            }
            present_html.innerHTML = present_html.innerHTML.replace(`<div>${user} - Present</div>`, '');
            leave_html.innerHTML = leave_html.innerHTML.replace(`<div>${user} - Leave</div>`, '');
            updateCount('absent-box', 0);
            updateCount('present-box', -1)
            updateCount('leave-box', -1)
            
            break;
        case 'leave':
            if (!leave_html.innerHTML.includes(`${user} - Leave`)) {
                leave_html.innerHTML += `<div>${user} - Leave</div>`;
                updateCount('leave-box', 1);
                updateCount('present-box', 0);
                updateCount('absent-box', 0);
            }
            present_html.innerHTML = present_html.innerHTML.replace(`<div>${user} - Present</div>`, '');
            absent_html.innerHTML = absent_html.innerHTML.replace(`<div>${user} - Absent</div>`, '');
             updateCount('leave-box', 0);
            updateCount('present-box', -1)
            updateCount('absent-box', -1)
            break;
        default:
            break;
    }
}

function updateCount(boxId, increment) {
  var box = document.getElementById(boxId);
  var count = box.querySelector('span');
  var currentCount = parseInt(count.textContent);
  var newCount = currentCount + increment;
  
  if (newCount < 0) {
      newCount = 0;
  }
  
  count.textContent = newCount;
}

  addData();
  
  function addUser() {
    var obj = {
      name: userName.value,
      fatherName: fatherName.value,
      rollNo: rollno.value,
      age: age.value,
    };
  
    users.push(obj);
    console.log(users);
    addData();
    alert("student added successfully")
  }
  
  function likeUser(element) {
    if (element.firstElementChild.className === "fa-regular fa-heart") {
      element.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      element.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  }

