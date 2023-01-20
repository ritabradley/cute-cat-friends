import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-pink-300'>
                    Oh no! Our cute friends didn't come to play with us!
                </h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
