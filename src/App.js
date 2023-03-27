import Main from './Main'
import Footer from './Footer'




function App() {

  const message = "Hello La piscine";

  return (
    <div>
      <Main messageProp={message}/>
      <Footer messageProp={message}/>

    </div>
  );
}

export default App;
