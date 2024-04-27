let containar = document.getElementById("containar")     
let selectTag = document.getElementById("select")

selectTag.addEventListener("change",function(){
    // console.log(selectTag.value)
    fetchData(selectTag.value)         //Ascending or Decending order
})

async function fetchData(order){
    let API_LINK = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

    if(order !=undefined){
      API_LINK += "?sort=population&order=" + order;   //Ascending or Decending order
     }

    try{ 
        let res = await fetch(API_LINK)
        let data = await res.json();

        console.log(data.data);             //display data 
        showData(data.data);
    }catch (error){
        console.log(error);
    }
}
fetchData();           //fetchData

function showData(data){
    containar.innerHTML = "";
    data.forEach(element =>{
        let countryDiv = document.createElement("div")    //create element
        countryDiv.className = "countryDiv"

        let renk = document.createElement("h4");          //create element
        renk.innerHTML = element.Rank;
        
        let country = document.createElement("h3")         //create element
        country.innerHTML = element.country

        let population  = document.createElement("p")       //create element
        population.innerHTML= element.population

        countryDiv.append(renk, country, population)      //fetch Data append 
        containar.appendChild(countryDiv)
    });
}