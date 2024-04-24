let meetc = document.getElementById('meetc');
let meetsh = document.getElementById('meetsh');

const head = new Headers();

// console.log("hhh");
const getshlok = (chapterNumber, shlokNumber) => {
  fetch(`https://bhagavadgitaapi.in/slok/${chapterNumber}/${shlokNumber}`,{
    method: "GET",
    mode: 'cors',
    headers: {}
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
        meetc.innerHTML = `<div class="shlok">${data.slok}</div>
                      <div class="mt-4">${data.tej.author}</div>
                          <div class="mt-1">${data.tej.ht}</div>
                          <div class="mt-4">${data.siva.author}</div>
                          <div class="mt-1">${data.siva.et}</div> 
                          <div class="mt-1">${data.siva.ec}</div>`;
                                     
    })
    .catch((err) => {
      console.log("err chet", err);
    });
}


const chept = async () => {
  await fetch('https://bhagavadgitaapi.in/chapters/', {
    method: "GET",
    mode: 'cors',
    headers: head
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((ele) => {
        meetsh.innerHTML += `<div class="d-flex justify-content-between mt-4">
        <div class="des col-6" >
            <div class="ch-num">अध्याय : ${ele.chapter_number}</div>
            <div class="chepter-name">नाम :${ele.name}</div>
            <div class="ch-meaning">अध्यायार्थः : ${ele.meaning.hi}</div>
            <div class="ch-verse">श्लोक संख्या : ${ele.verses_count}</div>
        </div>
        <div class="col-4">
        <lable class="ms-auto">Enter shlok number</lable>
        <input type="number" style="border-radius: 20px;" class="shlok-number py-2  mybtn w-50px bg-transparent text-dark " oninput="getshlok(${ele.chapter_number}, this.value)"></div>
        
       
        
    </div>`

      });
    })
    .catch((err) => {
      console.log("err chet", err);
    });
}

chept();

