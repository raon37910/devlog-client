import "./App.css";
import { Button } from "@/components/ui/button.tsx";

function App() {

	const onClick = () => {
		alert("Hello World");
	};

	return (
		<>
			<Button onClick={onClick}>Click me</Button>
		</>
	);
}

export default App;
