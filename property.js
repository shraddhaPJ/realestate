const properties = [
  { id:1, name:"2 BHK Apartment", price:"₹81 Lakh", area:"591 sq.ft.", location:"Hadapsar, Pune", amenities:["Gym","Swimming Pool","Children's Play Area"], images:["images/property1-1.jpg","images/property1-2.jpg","images/property1-3.jpg"] },
  { id:2, name:"3 BHK Apartment", price:"₹1.1 Crore", area:"936 sq.ft.", location:"Magarpatta, Pune", amenities:["Clubhouse","Jogging Track","Garden"], images:["images/property2-1.jpg","images/property2-2.jpg","images/property2-3.jpg"] },
  { id:3, name:"2 BHK Premium Apartment", price:"₹84.9 Lakh", area:"707 sq.ft.", location:"Shewalewadi, Pune", amenities:["Swimming Pool","Security","Parking"], images:["images/property3-1.jpg","images/property3-2.jpg","images/property3-3.jpg"] }
];

const params = new URLSearchParams(window.location.search);
const propertyId = parseInt(params.get("id"));
const property = properties.find(p=>p.id===propertyId);

const container=document.getElementById("property-details");
const imageElement=document.getElementById("property-image");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");

if(property){
  let currentImage=0;
  imageElement.src=property.images[currentImage];
  imageElement.alt=property.name;
  document.getElementById("property-name").innerText=property.name;
  document.getElementById("property-price").innerHTML=`<strong>Price:</strong> ${property.price}`;
  document.getElementById("property-area").innerHTML=`<strong>Area:</strong> ${property.area}`;
  document.getElementById("property-location").innerHTML=`<strong>Location:</strong> ${property.location}`;
  document.getElementById("property-amenities").innerHTML=`<strong>Amenities:</strong> ${property.amenities.join(", ")}`;

  nextBtn.addEventListener("click", ()=>{ currentImage=(currentImage+1)%property.images.length; imageElement.src=property.images[currentImage]; });
  prevBtn.addEventListener("click", ()=>{ currentImage=(currentImage-1+property.images.length)%property.images.length; imageElement.src=property.images[currentImage]; });

  document.getElementById("propertyName").value=property.name;
  document.getElementById("enquiryForm").addEventListener("submit", function(e){
    e.preventDefault();
    const userName=document.getElementById("name").value;
    const userEmail=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    const property=document.getElementById("propertyName").value;
    alert(`Thank you, ${userName}! Your enquiry about "${property}" has been received.\nWe will contact you at ${userEmail}.`);
    this.reset();
  });
}else{
  container.innerHTML="<p>Property not found.</p>";
}
const images = [
  "images/property1-1.jpg",
  "images/property1-2.jpg",
  "images/property1-3.jpg"
];

let currentIndex = 0;
const propertyImage = document.getElementById("property-image");

function showImage(index) {
  propertyImage.src = images[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Show first image by default
showImage(currentIndex);

