import "../styles/CatMail.css";
export default function CatMail() {
    return (
        <>
            <section className="blog">
                <div className="cat-mail">
                    <h3>Cat Mail</h3>
                    <p> Here you will find some User comments and questions about cats.</p>
                </div>

                <div className="comments">
                    <article className="post">
                        <p><span className="user">Jenny from Los Angeles:</span> Help! Is my cat trying to kill me??</p>
                        <blockquote>"My cat is always looking at me with those eyes. I´m scared. What should I do?"</blockquote>
                    </article>

                    <article className="post">
                        <p><span className="user">Tom from New York:</span> My cat is always sleeping. Is that normal?
                        </p>
                        <blockquote>"My cat is always sleeping. Is that normal? I´m worried about him."</blockquote>
                    </article>
                </div>
            </section>
        </>
    )
}