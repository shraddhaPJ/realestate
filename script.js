const properties = [
  { id:1, name:"2 BHK Apartment", price:"₹81 Lakh", area:"591 sq.ft.", image:"images/2bhk.jpeg" },
  { id:2, name:"3 BHK Apartment", price:"₹1.1 Crore", area:"936 sq.ft.", image:"images/3bhk.jpeg" },
  { id:3, name:"2 BHK Premium Apartment", price:"₹84.9 Lakh", area:"707 sq.ft.", image:"images/condo.jpeg" }
];

function displayProperties(list){
  const container = document.getElementById("properties-container");
  container.innerHTML = "";
  list.forEach(p=>{
    const card = document.createElement("div");
    card.classList.add("property-card");
    card.innerHTML=`
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: ${p.price}</p>
      <p>Area: ${p.area}</p>
      <a href="property.html?id=${p.id}">View Details</a>
    `;
    container.appendChild(card);
  });
}

displayProperties(properties);

function searchProperties(){
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = properties.filter(p=>p.name.toLowerCase().includes(input));
  displayProperties(filtered);
}

function resetSearch(){
  document.getElementById("searchInput").value="";
  displayProperties(properties);
}
