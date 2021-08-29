fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => loadSummery(data));

loadSummery = data => {

    let newconfirmvalue = data.Global.NewConfirmed;
    document.getElementById('newconfirmvalue').innerText = newconfirmvalue

    let totalconfirmvalue = data.Global.TotalConfirmed;
    document.getElementById('totalconfirmvalue').innerText = totalconfirmvalue

    let newdeathsvalue = data.Global.NewDeaths;
    document.getElementById('newdeathsvalue').innerText = newdeathsvalue

    let newrecovervalue = data.Global.NewRecovered;
    document.getElementById('newrecovervalue').innerText = newrecovervalue

    let totalrecovervalue = data.Global.TotalRecovered;
    document.getElementById('totalrecovervalue').innerText = totalrecovervalue

    let totaldeathsvalue = data.Global.TotalDeaths;
    document.getElementById('totaldeathsvalue').innerText = totaldeathsvalue

    let container = document.getElementById('tableContainer')

    let countries = data.Countries;
    for (let country of countries) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${country.Country}</th>
                    <td>${country.NewConfirmed}</td>
                    <td>${country.TotalConfirmed}</td>
                    <td>${country.NewDeaths}</td>
                    <td>${country.TotalDeaths}</td>
                    <td>${country.NewRecovered}</td>
                    <td>${country.TotalRecovered}</td>
        `
        container.appendChild(tr);
    }
}
// document.getElementById('searchBtn').addEventListener('click', function () {
//     let con = document.getElementById('inputField').value
//     let url = `https://api.covid19api.com/live/country/${con}/status/confirmed`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => search(data));
// })
// search = data => {
//     let country = data[0];
//     console.log(data);
//     let div = document.createElement('span');
//     div.innerHTML = `
//             <h1 class="text-center m-3 bg-secondary text-white">${country.Country} Status</h1>
//             <div class="row row-cols-2 row-cols-md-3 g-4">
//                 <div class="col">
//                     <div class="card h-100 bg-warning">
//                         <div class="card-body text-white text-center">
//                             <h5 class="card-title">New Confirm</h5>
//                             <h1>Comming Soon</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100 bg-danger">
//                         <div class="card-body text-white text-center">
//                             <h5 class="card-title">Total Confirm</h5>
//                             <h1>${country.Confirmed}</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100 bg-secondary">
//                         <div class="card-body text-white text-center">
//                             <h5>New Recovered</h5>
//                             <h1>Comming Soon</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100 bg-success">
//                         <div class="card-body text-white text-center">
//                             <h5>Total Recovered</h5>
//                             <h1>${country.Recovered}</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100 bg-warning">
//                         <div class="card-body text-white text-center">
//                             <h5>New Deaths</h5>
//                             <h1>Comming Soon</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100 bg-danger">
//                         <div class="card-body text-white text-center">
//                             <h5>Total Deaths</h5>
//                             <h1>${country.Deaths}</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     `
//     let contains = document.getElementById('countryContainer');
//     contains.innerText = ''
//     contains.appendChild(div)
// }