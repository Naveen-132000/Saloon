import axios from "axios";

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post("http://localhost:3000/submit-testimonial", formData);
    alert(response.data.message);
    // Optionally clear the form
    setFormData({ name: "", testimonial: "" });
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    alert("Failed to submit testimonial");
  }
};
