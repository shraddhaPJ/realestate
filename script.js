import { enquiriesCollection, addDoc, serverTimestamp } from "./firebase-init.js";

const modal = document.getElementById("enquiryModal");
const propertyInput = document.getElementById("property");
const statusMsg = document.getElementById("statusMsg");

document.getElementById("openFormBtn").onclick = () => { propertyInput.value = "General Enquiry"; modal.style.display = "flex"; };
document.getElementById("openFormBtnHero").onclick = () => { propertyInput.value = "General Enquiry"; modal.style.display = "flex"; };

document.querySelectorAll(".openPropertyEnquiry").forEach(btn => {
  btn.addEventListener("click", () => {
    propertyInput.value = btn.dataset.property;
    modal.style.display = "flex";
  });
});

document.getElementById("closeModal").onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; };

document.getElementById("enquiryForm").addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const property = propertyInput.value;

  if(!name || !email || !phone) { statusMsg.innerText="⚠️ Fill required fields"; return; }

  try {
    await addDoc(enquiriesCollection, { name, email, phone, message, property, timestamp: serverTimestamp() });
    statusMsg.innerText="✅ Enquiry submitted!";
    document.getElementById("enquiryForm").reset();
    setTimeout(()=>modal.style.display="none",2000);
  } catch(err) {
    console.error(err);
    statusMsg.innerText="❌ Failed to submit. Check Firebase config and rules.";
  }
});
