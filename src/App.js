import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CalculatorWrapper from "./components/CalculatorWrapper";

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Header />
        <CalculatorWrapper />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
