import React from 'react';
import Spinner from '../spinner/spinner';
import './item-details.sass';

const Record = ({ item, field, label }) => {
	return (
		<li className="thing-list__item">
			<h4 className="thing-list__item-header">{label}</h4>
			<p className="thing-list__item-subheader">{item[field]}</p>
		</li>
	);
};

export { Record };

export default class ItemDetails extends React.Component {
	state = {
		item: {
			id: null,
			name: null,
			gender: null,
			birthYear: null,
			eyeColor: null
		},
		loading: true,
		image: null,
		error: false
	};

	updateItemDetails() {
		const { itemId, loading, getData, getImageUrl } = this.props;
		if (!itemId) {
			return <span>Select a item from list</span>;
		}

		this.setState({
			loading
		});

		getData(itemId)
			.then((item) => {
				this.setState({ item, loading: false, image: getImageUrl(item) });
			})
			.catch((err) => {
				this.setState({ error: true, loading: false });
			});
	}

	componentDidMount() {
		this.updateItemDetails();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItemDetails();
		}
	}

	render() {
		const { item, loading, image } = this.state;
		if (!item.id) {
			return <span>Select a item from list</span>;
		}

		const content = (
			<React.Fragment>
				{React.Children.map(this.props.children, (child, idx) => {
					return React.cloneElement(child, { item });
				})}
			</React.Fragment>
		);

		return (
			<div className="thing d-flex">
				<img src={image} alt="thing img" className="thing__img" />
				<ul className="thing-list d-flex">
					<li className="thing-list__title">
						<h2 className="thing-list__title-name">{item.name}</h2>
					</li>
					{loading ? <Spinner /> : content}
				</ul>
			</div>
		);
	}
}
