import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundary extends Component { //Оболочка для отлавливания ошибок
    state = {
        error: false
    }

    componentDidCatch() { 
        this.setState({
            error: true
        })
    }

    render() {
        const {error} = this.state;

        if (error) {
            return (
                <ErrorIndicator />
            );
        }
        
        return (
            this.props.children
        );
    } 
}