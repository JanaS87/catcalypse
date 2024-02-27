import "../styles/TopList.css";
export default function TopList() {
    return (
        <>
            <section>
                <h3><span className="colored-number">5</span> Top Things a Cat likes!</h3>
                <div className="ordered-list">
                    <ol>
                        <li>Food</li>
                        <li>Sleep</li>
                        <li>Play</li>
                        <li>Food</li>
                        <li>Food</li>
                    </ol>
                </div>
            </section>
        </>
    )
}