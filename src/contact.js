import React from 'react'

function Contact() {
  
return (
<div>
  <section class="about-section contact-section">
    <div class="container">
      <div class="container py-5 w">
        <form class="p-md-5 border rounded-3 bg-body-tertiary">
          <div class="form-floating mb-3">

            <input type="text" id="form4Example1" class="form-control" />

            <label class="form-label" name="username" for="form4Example1">Name</label>

          </div>


          <div class="form-floating mb-3">

            <input type="email" id="form4Example2" class="form-control" />

            <label class="form-label" name="email" for="form4Example2">Email address</label>

          </div>

          <div class="form-floating mb-3">

            <textarea class="form-control" id="form4Example3" rows="4"></textarea>

            <label class="form-label" name="message" for="form4Example3">Message</label>

          </div>


          <div class="form-check d-flex justify-content-left mb-3">

            <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />

            <label class="form-check-label" for="form4Example4">

              Send me a copy of this message

            </label>

          </div>


          <button type="submit" class="w-100 btn btn-lg btn-primary">Send</button>

        </form>

      </div>
    </div>
  </section>
</div>
)
}

export default Contact