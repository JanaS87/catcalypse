import "../styles/CatForm.css";
export default function CatForm() {
    return (
        <>
        <section className="form-section">
            <h4>You want to send us some questions or comments? Sure! Just fill out the form</h4>
            <form className={"form"}>
                <label htmlFor="name">Name:</label>
                <input type="text"
                       id="name"
                       name="name"
                       required />

                <label htmlFor="email">Email:</label>
                <input type="email"
                       id="email"
                       name="email"
                       required />
                <label htmlFor="message">Message:</label>
                <textarea id="message"
                          name="message"
                          required
                          placeholder={"Write us your comment/ question"}
                          cols={30}
                          rows={10}
                          maxLength={100}></textarea>
                <input className={"form-btn"} type="submit" value="Send" />
            </form>

        </section>
        </>
    )
}