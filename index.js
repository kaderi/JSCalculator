function App() {

    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);
    const display = (symbol) => {
        setExpression(prev => prev + symbol);
        if(expression[expression.length-1] == "="){
            if(/[1-9.]/.test(symbol)){
            setExpression(symbol);
            }else{
            setExpression(answer + symbol);
            }
        }
    };
    const calculate = () => {
        setAnswer(eval(expression));
        setExpression((prev) => prev + "=");
    };
    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };

    const clear = () => {
        setExpression((prev) => prev.split("").slice(0, prev.length-1).join(""));
    
        setAnswer(0);
    };
    return (
        <div className="container">

            <div className="grid">
                <div onClick={display} id="dis" className="dis">
                    <input type = "text" value={expression} placeholder="0" disabled />
                    <div className="result">{answer}</div>
                </div>

                <div onClick={allClear} id="clear" className="padButton danger AC">AC</div>
                <div onClick={clear} id="c" className="padButton danger C">C</div>
                <div onClick={() => display("/")} id="divide" className="padButton divide">/</div>
                <div onClick={() => display("x")} id="multiply" className="padButton multiply">x</div>
                <div onClick={() => display("7")} id="seven" className="padButton  dark seven">7</div>
                <div onClick={() => display("8")} id="eight" className="padButton dark eight">8</div>
                <div onClick={() => display("9")} id="nine" className="padButton dark nine">9</div>
                <div onClick={() => display("-")} id="substract" className="padButton substract">-</div>
                <div onClick={() => display("4")} id="four" className="padButton dark four">4</div>
                <div onClick={() => display("5")} id="five" className="padButton dark five">5</div>
                <div onClick={() => display("6")} id="six" className="padButton dark six">6</div>
                <div onClick={() => display("+")} id="add" className="padButton add">+</div>
                <div onClick={() => display("1")} id="one" className="padButton dark one">1</div>
                <div onClick={() => display("2")} id="two" className="padButton dark two">2</div>
                <div onClick={() => display("3")} id="three" className="padButton dark three">3</div>
                <div onClick={calculate} id="equals" className="padButton blue equals">=</div>
                <div onClick={() => display("0")} id="zero" className="padButton dark zero">0</div>
                <div onClick={() => display(".")}id="dot" className="padButton dark dot">.</div>
                

            </div>

        </div>

    );

    
}
ReactDOM.render(<App />, document.getElementById("root"));