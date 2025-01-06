import { Button } from "@/components/ui/button.tsx";
import Header from "@/components/ui/Header.tsx";

function App() {

	const onClick = () => {
		alert("Hello World");
	};

	return (
		<>
			<Header />
			<Button onClick={onClick}>Click me</Button>
		</>
	);
}

export default App;
