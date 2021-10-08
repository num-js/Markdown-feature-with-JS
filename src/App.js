import "./styles.css";

export default function App() {
    const markdownParser = (text) => {
        const toHTML = text
            .replace(/^### (.*$)/gim, "<h3>$1</h3>") // h3 tag
            .replace(/^## (.*$)/gim, "<h2>$1</h2>") // h2 tag
            .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1 tag
            .replaceAll(/\*\*(.*)\*\*/gim, "<b>$1</b>") // bold text
            .replace(/\*(.*)\*/gim, "<i>$1</i>"); // italic text
        return toHTML.trim(); // using trim method to remove whitespace
    };

    const markdownParserBold = (text) => {
        const boldRegex = /\*\*(.*?)\*\*/gm;
        var html = text.replace(boldRegex, '<b>$1</b>');
        return html;
    };

    const someText = markdownParser("Hello **Numan**  This Is *Markdown*");
    const description = markdownParserBold("Hey **Numan** This is **N.Dev**,  added multiple **Bold** Markdown");

    return (
        <div className="App">
            <h1>Hello Numan</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div dangerouslySetInnerHTML={{ __html: someText }} />

            <br />
            <br />
            <br />
            <br />
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <br />
            <br />
        </div>
    );
}