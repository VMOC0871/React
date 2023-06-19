import PropTypes from 'prop-types';

export const FistApp = ({title, subTitle})=>{
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle } </p>
        </>
    );
}

// eslint-disable-next-line no-undef
FistApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}