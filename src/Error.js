


import { useRouteError } from "react-router-dom";
import './Error.css';

export default function Error() {
	const error = useRouteError();
	return (
	<h1 id="Errorpage" className="text-center">
	{error.statusText || error.message}
	</h1>
	);
} /* Error */

