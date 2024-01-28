import styles from "./styles.module.css";

export default function ContactForm() {
  return (
    <>
      <form
        action="https://formsubmit.co/joao.araujoo2007@gmail.com"
        method="POST" 
        className={styles.wrapper}
      >
        <p className="paragraph"style={{margin: "20px 0"}}>Feel free to <strong>reach out</strong> and share your <strong>thoughts</strong>. I look forward to <strong>hearing</strong> from you!</p>
        
        <input type="text" name="name"placeholder="Name" className={styles.input} required />
        <input type="email" name="email" placeholder="Email" className={styles.input} required />
        <textarea name="message" placeholder="Message" rows="5" className={styles.textarea} required></textarea>
        <input type="hidden" name="_captcha" value={false} />
        {/* TODO criar página de obrigado */}
        {/* <input type="hidden" name="_next" value="http://localhost:5173/contact" /> */}
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </>
  );
}
