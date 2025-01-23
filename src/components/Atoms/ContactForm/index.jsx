import styles from "./styles.module.css";

export default function ContactForm() {
  return (
    <>
      <form
        action="https://formsubmit.co/joao.araujoo2007@gmail.com"
        method="POST"
        className={styles.wrapper}
      >
        <p className="paragraph" style={{ margin: "20px 0" }}>
          Fique à vontade para <strong>entrar em contato</strong> e compartilhar
          suas <strong>ideias</strong>. Estou ansioso para{" "}
          <strong>ouvir</strong> de você!
        </p>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          rows="5"
          className={styles.textarea}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Enviar mensagem
        </button>
        <input type="hidden" name="_captcha" value={false} />
        <input
          type="hidden"
          name="_next"
          value="https://joaoaraujo.vercel.app/thanks"
        />
      </form>
    </>
  );
}
