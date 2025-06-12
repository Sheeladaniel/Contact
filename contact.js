<!-- Contact Form Section -->
<section id="contact" style="margin-top: 2rem;">
  <h2>Contact Us</h2>
  <form id="contactForm">
    <label for="fullName">Full Name:</label><br>
    <input type="text" id="fullName" name="fullName" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="5" required></textarea><br><br>

    <button type="submit">Submit</button>
  </form>

  <p id="errorMessage" style="color: red;"></p>
</section>

<!-- JavaScript Validation -->
<script>
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorMessage.textContent = ""; // Clear previous message

    if (!fullName || !email || !message) {
      errorMessage.textContent = "Please fill out all required fields.";
      e.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      e.preventDefault();
      return;
    }

    if (message.length < 20) {
      errorMessage.textContent = "Message must be at least 20 characters.";
      e.preventDefault();
      return;
    }

    alert("Form submitted successfully!");
  });
</script>
