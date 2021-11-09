import { useState } from "react";
import { Form } from "semantic-ui-react";

type Props = {
	player: Number;
};

const options = [
	{
		key: "Donnant-donnant",
		text: "Donnant-donnant",
		value: "Donnant-donnant",
	},
	{
		key: "Lunatic",
		text: "Lunatic",
		value: "Lunatic",
	},
	{
		key: "Graduelle",
		text: "Graduelle",
		value: "Graduelle",
	},
	{
		key: "Binaire",
		text: "Binaire",
		value: "Binaire",
	},
	{
		key: "Périodique méchante",
		text: "Périodique méchante",
		value: "Périodique méchante",
	},
	{
		key: "Majorité",
		text: "Majorité",
		value: "Majorité",
	},
	{
		key: "Périodique gentille",
		text: "Périodique gentille",
		value: "Périodique gentille",
	},
	{
		key: "CCCCT",
		text: "CCCCT",
		value: "CCCCT",
	},
	{
		key: "Sondeur",
		text: "Sondeur",
		value: "Sondeur",
	},
];

const Selector: React.FC<Props> = ({ player }) => {
	const [selection, setSelection]: Array<any> = useState();
	return (
		<div>
			<h1>Player {player}</h1>

			<Form.Select
				placeholder="Select"
				fluid
				options={options}
				onChange={(e, { value }) => setSelection(value)}
			/>

			<p>Selected value : {selection} </p>
		</div>
	);
};

export default Selector;
