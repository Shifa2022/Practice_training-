
import './App.css';
import Card from './Card';
import Message from './Message';
import Badge from './Badge';


function App() {
  return (
    <div>
      <p>simple text</p>
      <Message/>
      <Card title="REACT"/>
      <Card title="NODEJS"/>
      <Badge caption="Inbox" count="10"/>
    <Badge caption="Sent" count="1"/>
    </div>
       
        
   
  );
}

export default App;
