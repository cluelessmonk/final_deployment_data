import styles from "../styles/ContactUs.module.css";

function ContactUs() {
  return (
    <div className={styles["contact-container"]}>
      <h3 className="text-3xl font-bold mt-3 mb-3">Contact Us</h3>
      <div className="text-2xl mt-3 mb-3 ">
        <p>
          <strong>Website:</strong> http://www.mnnit.ac.in/
        </p>
        <p>
          <strong>Email:</strong> manishas@mnnit.ac.in , seemanara@mnnit.ac.in
        </p>
        <p>
          <strong>Mobile:</strong> +919984421252, +919044533554
        </p>
      </div>
      <div className={styles["contact-form"]}>
        <h2>Send Us a Message</h2>
        <form>
          <div className={styles["form-group"]}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary hover:bg-gray-800 bg-slate-600 rounded-xl w-36 h-9 text-white "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
