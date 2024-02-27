import TopList from "./TopList.tsx";
import CatMail from "./CatMail.tsx";
import CatForm from "./CatForm.tsx";
import "../styles/Main.css";

export default function Main() {
    return (
        <>
            <main>
                <section className={"introduction"}>
                    <h3>Have you ever seen a cat?</h3>
                    <p className="introduction">Sometimes, I look around and I´m thinking about animals. I let my mind run free and suddenly,
                        I see this:</p>
                    <div className="catpic">
                        <img src={"src/assets/img/manfred.jpg"} alt={"A cat named Manfred"} />
                    </div>
                </section>

                <section className={"ideas"}>
                    <h3>What do you think?</h3>
                    <p>Do you like cats? Do you think they are cute?
                        Or do you think they are evil? Let me know!</p>
                </section>
                <TopList />
                <CatMail />
                <CatForm />

            </main>
        </>
    )
}