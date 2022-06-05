import './NotFound.scss'
import { useIntl } from 'react-intl';

const NotFound = () => {
	const intl = useIntl();

	return (
		<main role="main">
			<div className="error-500">
				<div className="container">
					<div className="center">
						<div className="center-text">
							<div className="text-top-image">404</div>
						</div>
						<div className="content-message">
							<div>
								<p className="error-message"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default NotFound;
