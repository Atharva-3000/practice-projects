import "../styles/contact.scss";
import '../styles/mediaQueries.scss';
const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder="Enter your name:" />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="Enter your Email:" />
          </div>

          <div>
            <label htmlFor="">Message</label>
            <input type="text" required placeholder="Enter your message/query:" />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
