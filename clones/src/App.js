import "./App.scss";

import Clones from "./Components/Clones";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Title from "./Components/Title";

function App() {
	return (
		<div className="App">
			{/* <Header /> */}
			<Title />
			<Clones />
			<Footer />
		</div>
	);
}

export default App;