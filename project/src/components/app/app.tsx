import Main from '../main/main';

type MainSettings = {
  countOffer: number
}

function App(props: MainSettings): JSX.Element {
  return (
    <section>
      <Main countOffer = {props.countOffer}/>
    </section>
  );
}

export default App;
