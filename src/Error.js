
import { useRouteError } from "react-router-dom";
import Website from './Website';

export default function Error() {
	const error = useRouteError();
	return (
	<Website>
	<div className="text-center">
	<h1>
	{error.statusText || error.message}
	</h1>
	Sorry
	</div>
	</Website>
	);
} /* Error */

