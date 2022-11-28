import Title from './components/title';
import SectionHeader from './components/section-header';
import SectionText from './components/section-text';
import './css/App.css';

function App() {

  return (
    <div className='App'>

      <Title/>
      <div className='darkSection'>

        <SectionHeader text="Who am I?"/>     
        <SectionText text="My name is Evan Cook, I am from Halifax, Nova Scotia and I am a first year CS 
        student at Queen's University." />

      </div>
      <div className='lightSection'>
        <SectionText text="Placeholder text"/>
        <SectionHeader text="Placeholder header" />
      </div>
      <div className='darkSection'>

        <SectionHeader text="Placeholder header"/>     
        <SectionText text="Placeholder text" />

      </div>


    </div>
    
  );
}

export default App;
