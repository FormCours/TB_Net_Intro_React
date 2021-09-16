// Installation de la dépendence prop-types
import PropTypes from 'prop-types';

const Welcome = (props) => {
    const {name} = props;

    return (
        <h1>Bienvenue sur {name}</h1>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

export default Welcome;