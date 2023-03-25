import CodeEditor from "./CodeEditor"

import "./App.css"

const code = `import random;


def bogo_sort(data):
    while not is_sorted(data):
        random.shuffle(data)


def is_sorted(data):
    for i in range(len(data) - 1):
        if data[i] > data[i + 1]:
            return False
    return True


data = [4, 2, 3, 1]
bogo_sort(data)
print(data)`


const h2 = (text) => {
    return <h2 id={generateSlug(text)}>
        <a href={generateSlug(text)}>#</a> {text}
    </h2>
}


const generateSlug = (string) => {
    return string.trim().toLowerCase().replace(/\s+/g, "-");
};

function App() {
    return (
        <div className="App">
            <h1>Tabbable Ace Editor</h1>
            <p>An Example of tabbable code editors.</p>
            <p>
                Sites can be tabbed through normally. However, whenever
                a <a href={"https://github.com/securingsincity/react-ace"} target={"_blank"} rel={"noreferrer"}>react-ace</a> component
                is interacted with either by clicking on it or typing while the
                editor is focused, tabs will then indent or dedent the code.
                This can be escaped by clicking off the editor or by pressing
                the escape key at which point tabs can be used to navigate
                the page.
            </p>
            <p>
                Check out the code in the <a href={"https://github.com/James-Ansley/tabbable-ace-editor"} target={"_blank"} rel={"noreferrer"}>tabbable-ace-editor repo</a>.
            </p>
            {h2("A Code Example")}
            <CodeEditor code={`print("Hello, World! ")`}/>
            {h2("Another Code Example")}
            <CodeEditor code={code}/>

        </div>
    );
}

export default App;
