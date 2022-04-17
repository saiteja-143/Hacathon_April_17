"use strict";
// let dataList = document.getElementById("countries");
// let count = 0;

const url = "https://restcountries.com/v3.1/all";
let display = new Object();
// const url1 = `https://api.agify.io?name=${Name}&country_id=${country}`;

let div1 = document.createElement("div");
div1.className = "search-container";

let input1 = document.createElement("input");
input1.type = "text";
input1.value = "Enter the person name";
input1.id = "i1";

div1.appendChild(input1);

let br1 = document.createElement("br");
div1.appendChild(br1);

let br2 = document.createElement("br");
div1.appendChild(br2);

let input2 = document.createElement("input");
input2.setAttribute("list", "countries");
input2.type = "text";
input2.value = "Select Country";

let dataList = document.createElement("datalist");
dataList.id = "countries";
input2.appendChild(dataList);

div1.appendChild(input2);

let br3 = document.createElement("br");
div1.appendChild(br3);

let search = document.createElement("button");
search.innerHTML = "Find";
search.id = "finding";
div1.appendChild(search);

document.body.appendChild(div1);

// Creating the Input tags using DOM
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      let dataList1 = document.getElementById("countries");
      //   console.log(element.name.common);
      let options = document.createElement("option");
      options.value = element.cca2;
      options.innerHTML = element.name.common;
      dataList1.appendChild(options);
      //   console.log(element.cca2);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Event that occurs after the Clicking on Find Button
search.addEventListener("click", function () {
  let Name = input1.value;
  let country = input2.value;

  //If condition
  if (country == "Select Country") {
    let newurl1 = `https://api.nationalize.io?name=${Name}`;
    fetch(newurl1)
      .then((response) => response.json())
      .then((data) => {
        if (data.country.length === 0) {
          alert("Select the country Name with person name");
          location.reload();
        } else {
          country = data.country[0].country_id;
          let ageurl = `https://api.agify.io?name=${Name}&country_id=${country}`;
          fetch(ageurl)
            .then((response) => response.json())
            .then((data) => {
              if (data.age === null) {
                alert("Enter the name properly");
              } else {
                let div2 = document.createElement("div");
                div2.className = "response";

                let h31 = document.createElement("h3");
                h31.innerHTML = `Name:${data.name}`;
                div2.appendChild(h31);

                let h32 = document.createElement("h3");
                h32.innerHTML = `Country:${data.country_id}`;
                div2.appendChild(h32);

                let h33 = document.createElement("h3");
                h33.innerHTML = `Age:${data.age}`;
                div2.appendChild(h33);

                let h34 = document.createElement("h3");
                h34.innerHTML = `Total Age Records Examined: ${data.count}`;
                div2.appendChild(h34);

                document.body.appendChild(div2);

                display.Name = data.name;
                display.countryid = data.country_id;
                display.age = data.age;
                display.age_records_examined = data.count;

                let genderurl = `https://api.genderize.io?name=${Name}&country_id=${country}`;
                fetch(genderurl)
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.gender === null) {
                      alert("Enter the proper name");
                      location.reload();
                    } else {
                      let h35 = document.createElement("h3");
                      h35.innerHTML = `Gender: ${data.gender}`;
                      div2.appendChild(h35);

                      let h36 = document.createElement("h3");
                      h36.innerHTML = `Gender Probability: ${data.probability}`;
                      div2.appendChild(h36);

                      let h37 = document.createElement("h3");
                      h37.innerHTML = `Total Gender Records Examined: ${data.count} `;
                      div2.appendChild(h37);

                      display.gender = data.gender;
                      display.gender_probability = data.probability;
                      display.gender_records_examined = data.count;
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Else condition
  else {
    let ageurl = `https://api.agify.io?name=${Name}&country_id=${country}`;
    fetch(ageurl)
      .then((response) => response.json())
      .then((data) => {
        if (data.age === null) {
          alert("Enter the Person Name and Country  properly");
          location.reload();
        } else {
          let div2 = document.createElement("div");
          div2.className = "response";

          let h31 = document.createElement("h3");
          h31.innerHTML = `Name:${data.name}`;
          div2.appendChild(h31);

          let h32 = document.createElement("h3");
          h32.innerHTML = `Country:${data.country_id}`;
          div2.appendChild(h32);

          let h33 = document.createElement("h3");
          h33.innerHTML = `Age:${data.age}`;
          div2.appendChild(h33);

          let h34 = document.createElement("h3");
          h34.innerHTML = `Total Age Records Examined: ${data.count}`;
          div2.appendChild(h34);

          document.body.appendChild(div2);

          display.Name = data.name;
          display.countryid = data.country_id;
          display.age = data.age;
          display.age_records_examined = data.count;

          let genderurl = `https://api.genderize.io?name=${Name}&country_id=${country}`;
          fetch(genderurl)
            .then((response) => response.json())
            .then((data) => {
              if (data.gender === null) {
                alert("Enter the proper name");
                location.reload();
              } else {
                let h35 = document.createElement("h3");
                h35.innerHTML = `Gender: ${data.gender}`;
                div2.appendChild(h35);

                let h36 = document.createElement("h3");
                h36.innerHTML = `Gender Probability: ${data.probability}`;
                div2.appendChild(h36);

                let h37 = document.createElement("h3");
                h37.innerHTML = `Total Gender Records Examined: ${data.count} `;
                div2.appendChild(h37);

                display.gender = data.gender;
                display.gender_probability = data.probability;
                display.gender_records_examined = data.count;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Displaying info on screen
  console.log(display);
  //   console.log(display[country_id]);

  //   console.log(display.age_records_examined);
  //   console.log(display.gender);
  //   console.log(display.gender_probability);
  //   console.log(display.gender_records_examined);

  //   h31.innerHTML = display.Name;
  //   h32.innerHTML = display.countryid;
  //   h33.innerHTML = display.Age;
  //   h34.innerHTML = display.age_records_examined;
});
