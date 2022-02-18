import React from "react";

function ContactUs() {
	return (
		<div className="contactus">
			<div className="container">
				<div className="contact-container">
					<h1 className="contact-head">CONTACT US</h1>
					<div className="line"></div>
					<form>
						<div className="main-name">
							<label htmlFor="name">Name</label>
							<input type="text" id="name-input-text" />
							<label htmlFor="email">Email</label>
							<input type="email" id="email-input-text" />
						</div>
						<div className="subject-phone">
							<label htmlFor="subject">Subject</label>
							<input type="text" id="subject-input-text" />
							<label htmlFor="phone">Phone</label>
							<input type="phone" id="phone-input-number" />
						</div>

						<div className="label-message">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message-input-area"
								cols="30"
								rows="10"
							></textarea>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
